<template>
    <div class="FooterMusic">
        <div class="noplay" v-if="!playList[0].al.id">
            亲，去听首歌吧~
        </div>
        <div class="isPlay" v-else>
            <div class="footerLeft" @click="updateDetailShow">
                <img :src="playList[playListIndex].al.picUrl" alt="">
                <div>
                    <p>{{playList[playListIndex].name}}</p>

                    <span v-for="item in playList[playListIndex].ar" :key="item.id">{{item.name}}</span>
                </div>
            </div>
            <div class="footRight">
                <svg class="icon" aria-hidden="true" v-if="isbtnShow" @click="play">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
                <svg class="icon" aria-hidden="true" v-else @click="play">
                    <use xlink:href="#icon-zanting"></use>
                </svg>
                <svg class="icon" aria-hidden="true" @click="toShowList">
                    <use xlink:href="#icon-liebiao2"></use>
                </svg>
            </div>
            <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
            <van-popup
                v-model:show="showList"
                round
                position="bottom"
                :style="{ height: '50%',width:'90%',bottom:'1.5rem',left:'5%',borderRadius:'.4rem',overflow:'scroll'}"
            >
                    <MusicListDetail :itemList='playList' :updateType="'footer'"/>
            </van-popup>
            <van-popup v-model:show="detailShow" position="right" :style="{ height: '100%',width:'100%' }">
                <MusicDetailVue 
                    :musicList='playList[playListIndex]' 
                    :playListIndex="playListIndex" 
                    :play="play" 
                    :isbtnShow="isbtnShow" 
                    :addDuration="addDuration"/>
            </van-popup>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';
import MusicDetailVue from '@/components/musicFooter/MusicDetail.vue'
import MusicListDetail from '@/components/common/MusicListDetail.vue';
export default{ 
    data(){
        return{
            interVal:null,
            showList:false
        }
    },
    computed:{
        ...mapState('musicList',['playList','playListIndex','isbtnShow','detailShow','currentTime'])
    },
    mounted(){
        // 重新进入时获取上次的歌曲信息
        if(localStorage.getItem('playList')!=null){
            this.updatePlayList(JSON.parse(localStorage.getItem('playList')))
            this.updatePlayListIndex(JSON.parse(localStorage.getItem('playListIndex')))
        }
    },
    updated(){
        // 获取歌词
        this.$store.dispatch('musicList/getLyric',this.playList[this.playListIndex].id)
        this.addDuration()
    },
    methods:{
        play:function(){
            if(this.$refs.audio.paused){                            //暂停了就播放
                this.$refs.audio.play() 
                this.updateIsbtnShow(false)
                this.updateTime()
            }  
            else{                                                   //播放了就变暂停
                this.$refs.audio.pause();
                this.updateIsbtnShow(true)
                clearInterval(this.interVal)
            }   
        },
        addDuration(){
            this.updateDuration(this.$refs.audio.duration)
        },
        updateTime(){
            this.interVal=setInterval(()=>{
                this.updateCurrentTime(this.$refs.audio.currentTime)
            },1000)
        }, 
        toShowList(){
            this.showList=true
        },
        
        ...mapMutations('musicList',
                    ['updateIsbtnShow',
                    'updateDetailShow',
                    'updatePlayList',
                    'updatePlayListIndex',
                    'updateCurrentTime',
                    'updateDuration']),
    },
    watch:{
        playListIndex(newVal,oldVal){     //监听下标，下标改变就让歌曲自动播放
            function ListPlay(){
            if(this.$refs.audio.paused) {this.updateIsbtnShow(false)}; //播放状态就让按钮变暂停

            this.$store.dispatch('musicList/getLyric',this.playList[this.playListIndex].id)
            this.$refs.audio.autoplay=true;
            this.play() //换了歌曲就让歌曲状态改变，且让进度条变为0
            this.addDuration()
            }
            if(oldVal!==-1) this.$nextTick(ListPlay)
        },
        playList(newVal,oldVal){
                function FirstPlay(){
                    this.updateIsbtnShow(false)
                    this.$refs.audio.autoplay=true;
                    // //将当前听的歌曲信息传入localStorage
                    // localStorage.setItem('playList',JSON.stringify(newVal))
                    // localStorage.setItem('playListIndex',JSON.stringify(this.playListIndex))
                }
                if(oldVal[0].id!==0||newVal[0]==oldVal[0]) {this.$nextTick(FirstPlay);}
        },
        //实现拖动进度条可以改变当前的播放时间
        currentTime(newVal,oldVal){
            if(newVal-oldVal>3||newVal-oldVal<-3) this.$refs.audio.currentTime=newVal
        },
    },
    components:{
        MusicDetailVue,
        MusicListDetail
    }
}
</script>

<style scoped>
.FooterMusic{
    width: 100%;
    height: 1rem;
    background-color: white;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
}
.noplay{
    width: 100%;
    height: 100%;
    line-height: 1rem;
    text-align: center;
    color:rgb(239,179,54) ;
}
.isPlay{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: .25rem;
    color: rgb(239,179,54);
}
.footerLeft{
    flex: 3;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-right: .6rem;
}
p{
    flex: 1;
    display: -webkit-box;
    /*设置弹性盒模型子元素的排列方式*/
    -webkit-box-orient: vertical;
    /*限制文本行数*/
    -webkit-line-clamp: 1;
    /* 溢出隐藏 */
    overflow: hidden;
}
img{
    width: .8rem;
    height: .8rem;
    border-radius:50%;
    margin-right: .2rem;
}
.footRight{
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.van-popup--bottom{
    bottom:2rem !important;
}
   
</style>