<template>
  <div class="container">
    <!-- 1-头部-采用vant导航组件 -->
    <van-nav-bar fixed title="黑马偷笑" right-text='搜索' v-if="$route.path !== '/user'" @click-right="$router.push('/search')"></van-nav-bar>
    <!-- 2-中间-二级路由容器 -->
    <div class="my-wrapper" :class="{noTop : $route.path === '/user'}">
      <router-view></router-view>
    </div>
    <!-- 3-底部-标签栏组件 -->
    <van-tabbar route>
      <van-tabbar-item icon="wap-home" to="/">首页</van-tabbar-item>
      <van-tabbar-item icon="question" to="/question">问答</van-tabbar-item>
      <van-tabbar-item icon="video" to="/video">视频</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/user">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.container{
  width: 100%;
  height: 100%;
  position: relative;
  .my-wrapper{
    width: 100%;
    height: 100%;
    overflow: hidden;
    padding-top: 46px;
    padding-bottom: 50px;
    box-sizing: border-box;
    &.noTop{
      padding-top: 0;
    }
  }
}
</style>
