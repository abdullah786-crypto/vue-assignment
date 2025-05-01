
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import './assets/tailwind.css';
import './assets/main.css' //
import 'primevue/resources/themes/aura-light-green/theme.css' // Tailwind-based theme
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import './assets/main.css'
import routers from './routes/routes';


const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: '.my-app-dark'
    }
  }
})

app.use(routers)

app.mount('#app')
