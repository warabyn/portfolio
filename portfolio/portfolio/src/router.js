import { createRouter,createWebHistory } from 'vue-router';
import Home from './views/Home.vue'
import SampleChart from './views/SampleChart.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/SampleChart', name: 'SampleChart', component: SampleChart },
]

const router = createRouter({
    history: createWebHistory(), // HTML5 History モード
    routes,
})

export default router;