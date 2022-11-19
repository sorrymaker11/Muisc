<template>
  <div>
    <loading/>
    <div>
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
    </div>
  </div>
</template>

<script>
import FooterMusic from "@/components/musicFooter/FooterMusic.vue"
import loading from '@/components/common/loading.vue';
export default {
 
  components:{
    FooterMusic,loading
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
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
.van-toast__text{
  color: white;
}
.van-toast{
background-color: rgba(0,0,0,.8);
width:2rem;
height: 2rem;
border-radius: .2rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
}
.van-icon{
  font-size: .7rem;
}
</style>
