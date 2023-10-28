import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MyView from '../views/MyView3.vue'
import UserinfoView from '../views/UserinfoView.vue'
import ParentComponent from '../views/ParentComponent.vue'
import ParentView from '../views/ParentView.vue'
import Child1View from '../views/ParentView/Child1View.vue'
import Child2View from '../views/ParentView/Child2View.vue'

const routes = [
  {
    path: '/',            //根路由
		redirect: '/home'     //把根路由重定向到home
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component:AboutView
  },
  
  {
    path: '/myview',
    name: 'myview',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/MyView3.vue')
    component:MyView
  },
  
  {
    path: '/userinfo',
    name: 'userinfo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/UserinfoView.vue')
    component:UserinfoView
  },
  {
    path: '/parent',
    name: 'parent',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/ParentComponent.vue')
    component:ParentComponent
  },
  {
    path:"/parentview",
    name:"parentview",
    component:ParentView,
    children: [               //配置子路由
    {
        path: '/parentview',
        redirect: '/parentview/child1'
    }, {
        path: '/parentview/child1',
        name:"Child1View",
        component: Child1View
    }, {
        path: '/parentview/child2/:id/:name',
        name:"Child2View",
        component: Child2View
    }
]
  }

]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  routes
})

export default router
