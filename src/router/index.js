import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/Login.vue"
import Home from "../components/Home.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: "/", redirect: "/login"},
    { path: "/login", component: Login },
    { path: "/home", component: Home}
  ]
})

// 挂载路由导航守卫
router.beforeEach( (to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，代表放行
  //  next() 放行 next("/login") 强制跳转
  if( to.path === "/login") {
    return next();
  }
  // 获取 token
  const tokenStr = window.sessionStorage.getItem("token");
  if(!tokenStr) {
    // token不存在，说明没有登录，强制跳转到登陆页面
    return next("/login")
  }
  // 存在token，直接放行
  next();
})

export default router
