import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
// 首先确定，用按需加载的方式配置路由
const Layout = () => import('@/views/layout') // 按需引入layout
const home = () => import('@/views/home') // 按需引入home 二级路由
const question = () => import('@/views/question') // 按需引入question 二级路由
const video = () => import('@/views/video') // 按需引入video 二级路由
const user = () => import('@/views/user') // 按需引入user 二级路由
// 建立其它的一级路由
const chat = () => import('@/views/user/chat')
const login = () => import('@/views/login')
const profile = () => import('@/views/user/profile')
const search = () => import('@/views/search')
const searchresult = () => import('@/views/search/result')
const article = () => import('@/views/article')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout, // 布局组件，一级路由
    children: [
      {
        path: '', // 如果path什么都不写，表示就是二级路由的默认组件
        component: home
      }, {
        path: '/question',
        component: question // 问答组件 二级路由
      }, {
        path: '/video',
        component: video // 视频组件 二级路由
      }, {
        path: '/user',
        component: user // 用户组件 二级路由
      }
    ]
  }, {
    path: '/user/chat',
    component: chat // 一级路由 小智同学
  }, {
    path: '/login',
    component: login // 一级路由 登录模块
  }, {
    path: '/user/profile',
    component: profile // 一级路由 编辑资料
  }, {
    path: '/search',
    component: search // 一级路由 搜索模块
  }, {
    path: '/search/result',
    component: searchresult // 一级路由 搜索结果
  }, {
    path: '/article',
    component: article // 一级路由 文章详情
  }

]

const router = new VueRouter({
  routes
})

export default router
