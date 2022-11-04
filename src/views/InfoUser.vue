<template>
  <div>
    <img :src="user.playlist[0].creator.backgroundUrl" alt="" class="bgimg">
    <div class="infoUserTop">
      <img :src="user.playlist[0].creator.avatarUrl" alt="图片加载失败~" class="profileImg">
      <div class="nickName">{{user.playlist[0].creator.nickname}}</div>
    </div>
    <div>
      <h2 class="ListTop">我的歌单</h2>
      <showList :playlist="user.playlist"/>
    </div>
    <div class="logOut" @click="logOut">退出登录</div>
  </div>
  </template>

<script>
import { mapState } from 'vuex'
import showList from '@/components/common/showList.vue';
import {getLoginOut} from '@/request/api/home'
export default{
  computed:{
    ...mapState('User',['user'])
  },
  created(){
    if(sessionStorage.getItem('user')!=null){
      this.$store.commit('User/updateUser',JSON.parse(sessionStorage.getItem('user')) )
    }
  },
  methods:{
    logOut(){
      localStorage.removeItem('token')
      this.$router.push('/login')
      getLoginOut()
    }
  },
  components:{
    showList
  }
}
</script>

<style scoped>
.bgimg{
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  /* 图片模糊 */
  filter:blur(30px); 
}
.infoUserTop{
  width: 100%;
  height: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.profileImg{
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
}
.nickName{
  font-weight: 700;
  font-size: .4rem;
}
.logOut{
  width: 80%;
  height: 1rem;
  background-color: red;
  color: white;
  border-radius: .4rem;
  text-align: center;
  line-height: 1rem;
  margin: 1rem auto 0;
}
</style>