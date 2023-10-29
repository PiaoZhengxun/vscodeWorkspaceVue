import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import MyView from '../views/MyView3.vue'
import UserinfoView from '../views/UserinfoView.vue'
import ParentComponent from '../views/ParentComponent.vue'
import ParentView from '../views/ParentView.vue'
import Child1View from '../views/ParentView/Child1View.vue'
import Child2View from '../views/ParentView/Child2View.vue'
import BeforeLoginView from '../views/BeforeLoginView.vue'
import LoginView from '../views/BeforeLoginView/LoginView.vue'
import RegisterView from '../views/BeforeLoginView/RegisterView.vue'

import LifeCycleView from '../views/LifeCycleView.vue'
import BeforeLoginView2 from '../views/BeforeLoginView2.vue'
import CompositionApiView  from '../views/CompositionApiView.vue'
import TodoList  from '../views/ToDoListView.vue'
import TodoList2  from '../views/ToDoListView2.vue'
import TodoList3 from '../views/ToDoListView3.vue'
const routes = [
  {
    path:"/compositionapi",
    name:"compositionapi",
    component:CompositionApiView,
  },
  {
    path:"/lifeCycleView",
    name:"lifeCycleView",
    component:LifeCycleView,
  },
  {
      path:"/beforeLogin",
      name:"beforeLogin",
      component:BeforeLoginView,
      children: [               //配置子路由
      {
          path: '/beforeLogin',
          redirect: '/beforeLogin/LoginView'
      }, {
          path: '/beforeLogin/LoginView',
          name:"LoginView",
          component: LoginView
      }, {
          path: '/beforeLogin/RegisterView',
          name:"RegisterView",
          component: RegisterView
      }
    ]
  },
  
  {
      path:"/beforeLogin2",
      name:"beforeLogin2",
      component:BeforeLoginView2
  },

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
        // path: '/parentview/child2/:id/:name',
        path: '/parentview/child2',
        name:"Child2View",
        component: Child2View
    }
    
]
  },
   {
    // path: '/parentview/child2/:id/:name',
    path: '/todoList',
    name:"todoList",
    component: TodoList
},
{
 // path: '/parentview/child2/:id/:name',
 path: '/todoList2',
 name:"todoList2",
 component: TodoList2
}
,
{
 // path: '/parentview/child2/:id/:name',
 path: '/todoList3',
 name:"todoList3",
 component: TodoList3
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  // history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  //创建守卫规则集合(这里表示'/home'与'/news'路径是需要权限验证的)
  const nextRoute = ['/home', '/about'];
  // 使用isLogin来模拟是否登录
  let isLogin = true;
  // 判断to.path(要跳转的路径)是否是需要权限验证的
  if (nextRoute.indexOf(to.path) >= 0) {
      if (!isLogin) {
          router.push({
              path: '/beforeLogin/LoginView'
          })
          //location.reload(); 
      }
  }
  next(); //必须要有
});




export default router
