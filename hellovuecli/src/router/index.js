import { createRouter, createWebHistory} from "vue-router";
// import About from '../components/About.vue'

const routes= [
    {
        path:"/home",
        name:"Home",
        component:()=>import("../components/Home.vue")
    },
    {
        path:"/about",
        name:"About",
        component:()=>import("../components/About.vue")
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router