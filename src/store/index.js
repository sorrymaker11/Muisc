import { createStore } from 'vuex'
import {getMusicLyric} from '@/request/api/item'
import {getPhoneLogin} from '@/request/api/home'

const musicList={
  namespaced:true,
  state: {
    playList: [{
      al: {
        id: 0,
        name: '',
        pic: 0,
        picUrl: '',
        pic_str: ''
        // id: 80754209,
        // name: "山楂树之恋 (完整版)",
        // pic: 109951164260611200,
        // picUrl: "https://p1.music.126.net/G00sAe86sPi5gFQyuJHU7A==/109951164260611202.jpg",
        // pic_str: "109951164260611202",
        // tns: [],
      },
      id:0 //1381755293
    }],
    playListIndex:-1, //默认下标-1,可以在初始化时对监听的执行进行判断
    isbtnShow:true, //  播放/暂停
    detailShow:false, //歌曲详情页
    lyricList:{}, //歌词
    loading:false,
    currentTime:0,
    duration:0 //歌曲总时长
  },
  getters: {
  },
  mutations: {
    updateIsbtnShow:function(state,value){
      state.isbtnShow=value;
    },
    pushPlayList(state,value){
      state.playList.push(value)
      localStorage.setItem('playList',JSON.stringify(state.playList))
    },
    updatePlayList:function(state,value){
      state.playList=value
      //将当前听的歌曲信息传入localStorage
      localStorage.setItem('playList',JSON.stringify(state.playList))
    },
    updatePlayListIndex(state,value){
      state.playListIndex=value
      localStorage.setItem('playListIndex',JSON.stringify(state.playListIndex))
    },
    updateDetailShow(state){
      state.detailShow=!state.detailShow
    },
    updateLyricList(state,value){
      state.lyricList=value
    },
    updateLoading(state,value){
      state.loading=!state.loading
    },
    updateCurrentTime(state,value){
      state.currentTime=value
    },
    updateDuration(state,value){
      state.duration=value
    }
  },
  actions: {
    getLyric:async function(context,value){
      let res=await getMusicLyric(value)
      context.commit('updateLyricList',res.data.lrc)
    }
  },
}

const User={
  namespaced:true,
  state:{
    isLogin:false,   //判断是否登录
    showFooter:true,
    user:{
      
    }
  },
  mutations:{
    updateIsLogin(state,value){
      state.isLogin=!state.isLogin
    },
    updateUser(state,value){
      state.user=value
    }
  },
  actions:{
    getLogin:async function (context,val){
      let res=await getPhoneLogin(val);
      return res;
    }
  }
}

const Loading={
  namespaced:true,
  state:{
    isLoading:false
  },
  mutations:{
    updateIsLoading(state,value){
      state.isLoading=value
    },
  },
  actions:{
  }
}
export default createStore({
  modules: {
    musicList,
    User,
    Loading
  }
})
