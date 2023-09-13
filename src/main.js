import './assets/main.css'

//* Configurando FontAwesome Ícones *\\
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//? Ícones usados no projeto ?\\
import { faXmark, faPlus, faMinus, faDivide, faPercent } from '@fortawesome/free-solid-svg-icons'
library.add(faXmark, faPlus, faMinus, faDivide, faPercent)

import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon) // add componente do FontAwesome
    .mount('#app')
