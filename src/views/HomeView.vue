<template>
  <div class="home">
    <TopNav/>
    <SwpierTop/>
    <IconList/>
    <MusicList/>
    <rankPlayList/>
  </div>
</template>

<script>
// @ is an alias to /src

import SwpierTop from '@/components/home/SwpierTop.vue'
import IconList from '@/components/home/IconList.vue'
import MusicList from '@/components/home/MusicList.vue'
import rankPlayList from '@/components/home/rankPlayList.vue'
import TopNav from "@/components/common/TopNav.vue"
export default {
  name: 'HomeView',
  components: {
    SwpierTop,IconList,MusicList,TopNav,rankPlayList,
  }
}
</script>
<style scoped>
.home{
  width: 95%;
  margin: 0 auto;
  margin-bottom: 1rem;
}
</style>
