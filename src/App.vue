<template>
  <TopNav/>
  <!-- <keep-alive>
    <router-view v-if="$route.meta.keepAlive"/>
  </keep-alive>
  <router-view/> -->
  <router-view  v-slot="{ Component }">
    <transition>
      <keep-alive include="myvideo">
        <component :is="Component"></component>
      </keep-alive>
    </transition>
  </router-view>
  <FooterMusic v-show='$store.state.User.showFooter'/>
</template>

<script>
import FooterMusic from "@/components/musicFooter/FooterMusic.vue"
import TopNav from "@/components/common/TopNav.vue"
export default {
 
  components:{
    FooterMusic,
    TopNav
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: rgb(254,209,81);
}
.icon{
  width:.5rem;
  height: .5rem;
  fill: white;
}
a{
  color: black;
}
</style>
