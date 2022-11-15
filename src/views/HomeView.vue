<template>
  <div>
    <TopNav/>
    <SwpierTop/>
    <IconList/>
    <MusicList/>
  </div>
</template>

<script>
// @ is an alias to /src

import SwpierTop from '@/components/home/SwpierTop.vue'
import IconList from '@/components/home/IconList.vue'
import MusicList from '@/components/home/MusicList.vue'
import TopNav from "@/components/common/TopNav.vue"
export default {
  name: 'HomeView',
  components: {
    SwpierTop,IconList,MusicList,TopNav
  }
}
</script>
