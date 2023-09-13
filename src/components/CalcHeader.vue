
<!--* HTML Header e seu css *-->
<template>
    <header class="calc-header">
        <h1 class="title">Calculadora</h1>
        <span class="logo"></span>
    </header>
</template>

<style scoped>
.calc-header {
    /* Ajustando posicionamento dos itens do Header e a cor de fundo */
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 2rem;
    background: linear-gradient(90deg, var(--blue-main) 0%, var(--blue-soft) 100%);
}

.title {
    /* Estilos aplicado na fonte */
    font-family: Lobster Two, cursive;
    font-weight: bold;
    font-size: 36px;
    text-shadow: 0 0 8px var(--white-main);

    /* Underline animada usando background */
    background: linear-gradient(90deg, var(--white-main) 0%, var(--grayish-white) 100%);
    background-size: 0% 4px;
    /* Definindo seu tamanho para receber animação */
    background-repeat: no-repeat;
    /* Bloqueando o repeat para manter o tamanho desejado */
    background-position: left bottom;
    /* Posicionando a underline */

    /* Config da animação  */
    animation: runningX 1.5s cubic-bezier(.53, .16, .25, 1) alternate infinite;
}

.logo {
    /* Tamanho da fonte e sua sombra */
    font-family: Lobster Two, cursive;
    font-size: 24px;
    font-weight: bold;
    text-shadow: 0 0 10px var(--white-main);
    /* Alinhamento do texto no centro */
    display: flex;
    justify-content: center;
    align-items: center;
    /* Posicionamento do logo no layout */
    position: relative;
    /* Tamanho do logo, ajuste para formato circular, overflow para limitar o before */
    width: 56px;
    height: 56px;
    border-radius: 50%;
    overflow: hidden;
    /* Sombra para dar destaque */
    box-shadow: rgba(17, 17, 26, 0.118) 0px 1px 0px, rgba(17, 17, 26, 0.103) 0px 0px 8px;
}

.logo::before {
    /* Posicionamento e reset para preparar elemento para a animação */
    content: "";
    position: absolute;
    width: 0%;
    height: 0%;
    /* Cor da borda animada do logo */
    background: var(--white-main);
    /* Animação que causa o efeito borda animada */
    animation: expand 2s cubic-bezier(.41, -0.04, 0, .99) infinite alternate,
        rotate-360 2s linear infinite;
}

/* After usado para sobrepor a box do before, gerando uma impressão de borda ao logo */
.logo::after {
    /* Conteúdo textual do logo, sua cor e posicionamento centralizado */
    content: "RB";
    color: var(--white-main);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    /* Tamanho e formato da box sobreposta ao before, aqui define-se o tamanho da borda */
    width: 52px;
    height: 52px;
    border-radius: 50%;
    /* Cor do background do logo e borda simples para melhorar seu destaque no layout*/
    background: var(--blue-soft);
    border: 1px solid var(--white-main);
}

/* Animação usada para fazer a underline 'correr' entre dois pontos */
@keyframes runningX {
    100% {
        background-size: 60% 4px;
    }
}


/* As duas animações a baixo estão ligadas ao before do logo, que gera a borda animada */
/* Animação usada para a box do before expandir/diminuir */
@keyframes expand {
    0% {
        width: 0%;
        height: 100%;
    }

    100% {
        width: 105%;
        height: 100%;
    }
}

/* Animação usada para a box do Before rodar 360 graus */
@keyframes rotate-360 {
    to {
        transform: rotate(360deg);
    }
}
</style>