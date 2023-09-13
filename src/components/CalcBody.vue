<script setup>
//** Importando o reactive do vue **\\
import { reactive } from 'vue';

// Criando a const estado que irá receber os dados necessários do script \\
const estado = reactive({
    VariablePrimary: 0, // Recuperando o primeiro input
    VariableSecondary: 0, // Recuperando o segundo input
    OperationIcon: ['plus'], // Array que recebe o nome do ícone selecionado
})

//* Função usada para mudar o ícone de acordo com o click no botão *\\
function TransformIcon(icon) {
    var { OperationIcon } = estado; // Recuperando Array
    // Método splice para limpar o Array
    estado.OperationIcon.splice(0, OperationIcon.length);
    // Agora com o Array limpo uso do push para setar o ícone desejado
    estado.OperationIcon.push(icon);
}

//* Função para transformar a operação de calculo *\\
function TransformOperation() {
    var { OperationIcon } = estado; // Recuperando Array
    // Uso do if/else if para fazer a seleção da operação de acordo com o nome do ícone \\
    if (OperationIcon == 'plus') {
        return calc('soma'); // Retorna a soma
    } else if (OperationIcon == 'minus') {
        return calc('subtracao'); // Retorna a subtração
    } else if (OperationIcon == 'xmark') {
        return calc('multiplicacao'); // Retorna a multiplicação
    } else if (OperationIcon == 'divide') {
        return calc('divisao'); // Retorna a divisão
    } else if (OperationIcon == 'percent') {
        return calc('porcentagem'); // Retorna a porcentagem
    }
}

// Função que armazena os calculos e recebe um parâmetro que permite a escolha \\
function calc(op) {
    const { VariablePrimary, VariableSecondary } = estado;
    if (op === 'soma') {
        // Soma
        return parseInt(VariablePrimary) + parseInt(VariableSecondary);
    } else if (op === 'subtracao') {
        // Subtração
        return parseInt(VariablePrimary) - parseInt(VariableSecondary);
    } else if (op === 'multiplicacao') {
        // Multiplicação
        return parseInt(VariablePrimary) * parseInt(VariableSecondary);
    } else if (op === 'divisao') {
        // Divisão com método toFixed para não gerar numero muito grande
        return (parseInt(VariablePrimary) / parseInt(VariableSecondary)).toFixed(4);
    } else if (op === 'porcentagem') {
        // Porcentagem
        return parseInt(VariablePrimary) * parseInt(VariableSecondary) / 100;
    }
}
</script>

<!--* HTML do corpo da calculadora *-->
<template>
    <div class="calc-body">
        <h2 class="text">Selecione a operação</h2>
        <div class="operations">
            <!-- Cada botão recebe a função TransformIcon com o seu valor respectivo -->
            <button @click="TransformIcon('plus')" class="button" type="button">
                <font-awesome-icon icon="fa-solid fa-plus" />
            </button>
            <button @click="TransformIcon('minus')" class="button" type="button">
                <font-awesome-icon icon="fa-solid fa-minus" />
            </button>
            <button @click="TransformIcon('xmark')" class="button" type="button">
                <font-awesome-icon icon="fa-solid fa-xmark" />
            </button>
            <button @click="TransformIcon('divide')" class="button" type="button">
                <font-awesome-icon icon="fa-solid fa-divide" />
            </button>
            <button @click="TransformIcon('percent')" class="button" type="button">
                <font-awesome-icon icon="fa-solid fa-percent" />
            </button>
        </div>
        <!-- Uso do Keyup nos inputs para atualizar em tempo real as variáveis -->
        <input @keyup="e => estado.VariablePrimary = e.target.value" class="input" type="number" placeholder="....">
        <span class="operation-icon">
            <!-- 
            Passando o valor do nome do ícone de acordo com o nome armazenado 
            dentro do Array, após o clique nos botões acima 
            -->
            <font-awesome-icon :icon="['fas', estado.OperationIcon]" />
        </span>
        <input @keyup="e => estado.VariableSecondary = e.target.value" class="input" type="number" placeholder="....">
        <span class="result">{{ TransformOperation() }}</span>
    </div>
</template>
<style scoped>
.calc-body {
    /* Disposição dos itens do corpo da tabela e alguns ajustes */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1rem;
    border-radius: 0 0 4px 4px;
}

.text {
    /* Fonte, cor e espaçamento do h2 */
    font-family: Lobster Two, cursive;
    font-size: 30px;
    color: var(--blue-soft);
    padding-top: 1rem;
}

.operations {
    /* Tamanho da box dos botões, posicionamento e espaçamento */
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1rem;
}

.button {
    /* Estilização dos botões  */
    border: none;
    cursor: pointer;
    font-size: 20px;
    color: var(--white-main);
    padding: .6rem 1rem;
    border-radius: 4px;
    transition: .2s;
    background-color: var(--blue-soft);
}

.button:hover {
    /* Hover para dar efeito de zom ao passar cursor nos botões */
    transform: scale(1.15);
}

.button:active {
    /* Usando o active para dar feedback de clique no botão  */
    transform: translateY(5px);
}

.input {
    /* Reset do input e sua transição*/
    border: none;
    outline: none;
    transition: .3s ease-in-out;

    /* Fonte, sua posição, espaçamento e cor */
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1px;
    color: var(--black-main);

    /* Tamanho do input */
    width: 60%;
    padding: .7rem 0;

    /* Underline animada usando background */
    background: linear-gradient(90deg, var(--blue-main) 0%, var(--blue-main) 100%);

    /* Tamanho da underline, posicionamento e bloqueio do repeat */
    background-size: 100% 8%;
    background-position: bottom;
    background-repeat: no-repeat;
}

/* Ajuste responsividade do input no mobile */
@media (max-width: 599px) {
    .input {
        width: 95%;
    }
}

.input:focus {
    /* Uso do focus para criar uma caixa ao clicar no input */
    background-size: 100% 100%;
    /* Alterando a cor e aplicando sombra para destacar melhor os dígitos */
    color: var(--white-main);
    text-shadow: 0 0 4px var(--white-main);
    /* Border radius para suavizar a caixa */
    border-radius: 4px;
}

.input::placeholder {
    /* Alterando a cor do placeholder para ficar mais visível */
    color: var(--gray-main);
}

.input:focus::placeholder {
    /* Alterando a cor do placeholder para ficar mais suave */
    color: var(--greyish-white);
}

.operation-icon {
    /* Estilizando o ícone entre os inputs */
    font-weight: bold;
    font-size: 30px;
    padding-top: 1rem;
    color: var(--blue-soft);
}

.result {
    /* Fonte, seu tamanho e espaçamento */
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    letter-spacing: 1px;
    /* Definindo tamanho, cor e espaçamento do span result */
    width: 80%;
    padding: .6rem;
    margin-top: 2rem;
    border-radius: 4px;
    background-color: var(--blue-soft);
}

/* Retirando as setas do input type number */
.input[type="number"]::-webkit-outer-spin-button,
.input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.input[type="number"] {
    -moz-appearance: textfield;
}
</style>
