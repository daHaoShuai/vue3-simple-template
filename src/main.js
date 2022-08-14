import { createApp } from 'vue'
import './index.css'
import 'uno.css'
import router from './router'
import store from './store'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')

app.config.errorHandler = (err, instance, info) => {
    console.log(err);
    console.log(instance);
    console.log(info);
}