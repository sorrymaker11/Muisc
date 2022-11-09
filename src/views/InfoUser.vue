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
  data(){
    return{
      creator:{},
      playlist:{}
    }
  },
  computed:{
    ...mapState('User',['user'])
  },
  created(){
    if(this.getCookie("Hm_lvt_e65c90af3a617aaf0cd3c68f64796d47")){
      this.$store.commit('User/updateUser',JSON.parse(localStorage.getItem('user')) )
    }
  },
  methods:{
    logOut(){
      localStorage.removeItem('user')
      this.$router.push('/login')
      getLoginOut()
      this.removeCookies(['Hm_lvt_e65c90af3a617aaf0cd3c68f64796d47'])
    },
    getCookie(name){
        //1、先给cookie做一下字符串分割，
        var arr=document.cookie.split("; ");//分割后变为数组，a=12 b=5 c=8 d=99
            //2、循环数组
        for(var i=0;i<arr.length;i++){
            var arr2=arr[i].split("=");  //根据“=”再次分割
                //arr2[0]——》存储的名称 abcd
                //arr2[1]——》存储的值 12 5 8 99
            if(arr2[0]==name){  //代表找到我想要的东西了
                return arr2[1];
            }
        }
            //另一种可能，用户第一次来网站，还没有cookie，所以肯定什么也找不到。所以在循环一次后就直接return 一个字符串，告诉用户什么也没找到。
            return "";
    },
    removeCookies(cookieList) {
        // toUTCString() 是将时间根据世界时转换为字符串
        let data = new Date(new Date().getTime() - 24*60*60*1000).toUTCString()
        for(let i in cookieList) {
            document.cookie = cookieList[i] + '= ;' + 'expires=' + data
        }
    },
    setCookies(obj, limitTime) {
	     let data = new Date( new Date().getTime() + limitTime*24*60*60*1000 ).toUTCString()
	
	     for(let i in obj) {
	         document.cookie = i + '=' + obj[i] + ';expires=' + data
	     }
	
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