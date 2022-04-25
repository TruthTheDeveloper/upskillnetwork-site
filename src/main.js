import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router.js'
import './viewport.less';

import './index.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
