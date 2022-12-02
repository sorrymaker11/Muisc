<template>
    <div>
        <img :src="musicList.al.picUrl" alt="" class="bgimg">
        <div class="detailTop">
            <div class="detailTopLeft">
                <svg class="icon" aria-hidden="true" @click="updateDetailShow">
                    <use xlink:href="#icon-jiantou_xiangzuo"></use>
                </svg>
                <div class="topMusic">
                    <div class="topName">
                        <Vue3Marquee>
                            <h3>{{musicList.name}}</h3>
                        </Vue3Marquee>
                    </div>
                    <div class="topAutor">
                        <span v-for="autor in musicList.ar" :key="autor.id">
                            {{autor.name}}&nbsp;
                        </span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jinrujiantou"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="detailTopRight">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
            </div>
        </div>
        <div class="detailContent" v-show="!isLyricShow">
            <img src="@/assets/needle.png" alt="" class="img_needle">
            <img src="@/assets/cd.png" alt="" class="img_cd">
            <img :src="musicList.al.picUrl" alt="" class="img_ar" @click="isLyricShow=!isLyricShow">
        </div>
        <div class="musicLyric" ref="musicLyric" v-show="isLyricShow" @click="isLyricShow=!isLyricShow">
            <p v-for="item in lyric" :key="item" :class="{active:(currentTime*1000>=item.time&&currentTime*1000<item.next)}">
                {{item.lrc}}
            </p>
        </div>
        <div class="detailFooter">
            <div class="footerTop">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-collection"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiazai"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-heijiaochangpian"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xunhuan"></use>
                </svg>
            </div>
            <div class="footerContent">
                <span>{{changTime(currentTime)}}</span>
                <input type="range" class="range" ref="range" min="0" step="0.05" :max="duration" v-model="currentTime">
                <span>{{changTime(duration)}}</span>
            </div>
            <div class="footerBottom">
                <svg class="icon" aria-hidden="true" @click="changeplayType(2)" v-show="playType===0">
                    <use xlink:href="#icon-xunhuanbofang"></use>
                </svg>
                <svg class="icon" aria-hidden="true" @click="changeplayType(0)" v-show="playType===1">
                    <use xlink:href="#icon-liebiaoxunhuan"></use>
                </svg>
                <svg class="icon" aria-hidden="true" @click="changeplayType(1)" v-show="playType===2">
                    <use xlink:href="#icon-suijibofang01"></use>
                </svg>
                <svg class="icon" aria-hidden="true" @click="goPlay(-1)">
                    <use xlink:href="#icon-shangyishou"></use>
                </svg>
                <svg class="icon" aria-hidden="true" @click="play" v-if="isbtnShow">
                    <use xlink:href="#icon-bofang"></use>
                </svg>
                <svg class="icon" aria-hidden="true" @click="play" v-else>
                    <use xlink:href="#icon-zanting"></use>
                </svg>
                <svg class="icon" aria-hidden="true" @click="goPlay(1)">
                    <use xlink:href="#icon-xiayishou"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liebiao2"></use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
import {Vue3Marquee} from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'
import { mapMutations,mapState } from 'vuex';
import { Toast } from "vant"
export default{
    data(){
        return{
            isLyricShow:false,
            playType:1
        }
    },
    computed:{
        lyric:function(){
            let arr;
            if(this.lyricList.hasOwnProperty('lyric')){
                arr=this.lyricList.lyric.split(/[(\r\n)\r\n]+/).map((item,i)=>{
                    let min=item.slice(1,3),
                        sec=item.slice(4,6),
                        msec=item.slice(7,item.indexOf(']')-1),
                        lrc=item.slice(item.indexOf(']')+1,item.length)
                    let time=parseInt(min)*60*1000+parseInt(sec)*1000+parseInt(msec)
                    // console.log(min,sec,msec,lrc)
                    return {min,sec,msec,lrc,time}
                })
                arr.forEach((item,i)=>{
                    if(i===arr.length-1||isNaN(arr[i+1].time)){
                        item.next=10000
                    }else{
                        item.next=arr[i+1].time  //下一句歌词开始的时间
                    }
                })
            }
            return arr
        },
        //给进度条实现双向绑定，不能使用简写，因为简写没有set
        currentTime:{
            get(){
                return this.$store.state.musicList.currentTime
            },
            set(value){
                // console.log(value)
                return this.$store.commit('musicList/updateCurrentTime',value)
            }
        },
        ...mapState('musicList',['lyricList','playListIndex','playList','duration']),
    },
    updated(){
        // console.log(this.musicList);
        // console.log(this.lyricList.lyric)
        this.addDuration()
    },
    methods:{
        goPlay(num){
            // if(num===0) {this.currentTime=0;console.log(this.currentTime);}
            // else{
                let newIndex=this.playListIndex+num
                if(newIndex<0)  newIndex=this.playList.length-1
                else if(newIndex>=this.playList.length)  newIndex=0
                this.updatePlayListIndex(newIndex)
            // }
        },
        //将当前时间和总时间的秒数转化为0:00的形式
        changTime(val){
            if(isNaN(val)) return '加载中'  //防止数据加载慢导致显示NaN
            else{
                let msec=Math.round(val%60)
                if(msec<10) msec='0'+msec
                return (parseInt(val/60)+':'+msec)
            }
        },
        changeplayType(type){
            this.playType=type
            let content=null
            if(type===0) content='单曲循环'
            else if(type===1) content='列表循环'
            else content='随机播放'
            Toast(content);
        },
        ...mapMutations('musicList',['updateDetailShow','updatePlayListIndex','updateCurrentTime'])
    },
    watch:{
        currentTime(newVal){
            let p=document.querySelector('.active')
            // if(newVal-oldVal>3||newVal-oldVal<-3) this.$refs.audio.currentTime=newVal
            if(p&&p.offsetTop>300){
                this.$refs.musicLyric.scrollTop=p.offsetTop-300
            }
            if(newVal===this.duration){
                if(this.playType==0){
                    this.currentTime=0
                    this.play()
                }
                else if(this.playType==1){
                    this.goPlay(1)
                    // console.log(this.playType)
                }
                else this.goPlay(Math.ceil(Math.random()*this.playList.length))
            } 
        }
        // this.$refs.range.value
    },
    props:['musicList','isbtnShow','play','addDuration'],
    components:{
        Vue3Marquee
    }
}
</script>

<style lang="scss" scoped>
.bgimg{
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    filter: blur(1.6rem);
}
.detailTop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
}
.detailTopLeft{
    display: flex;
    align-items: center;
}
.topMusic{
    width: 4rem;
    height: 100%;
    margin-left: .4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.topName{
    width: 2.5rem;
}
.topAutor{
    width: 100%;
    display: flex;
    align-items: center;
    display: -webkit-box;
    /*设置弹性盒模型子元素的排列方式*/
    -webkit-box-orient: vertical;
    /*限制文本行数*/
    -webkit-line-clamp: 1;
    /* 溢出隐藏 */
    overflow: hidden;
}
.topAutor .icon{
    width: .3rem;
    height: .3rem;
}
.detailTopRight{
    display: flex;
    align-items: center;
}
.detailContent{
    width: 100%;
    height: 9rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.img_needle{
    width: 2rem;
    height: 3rem;
    position: absolute;
    left:46%;
    transform-origin: 0 0;
    transform: rotate(-10deg);
    transition: all 2s;
}
.img_cd{
    width: 5rem;
    height: 5rem;
    position: absolute;
    bottom: 2.3rem;
    z-index: -1;
}
.img_ar{
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    position: absolute;
    bottom: 3.2rem;
}
.musicLyric{
    width: 100%;
    height: 8rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: .2rem;
    overflow: scroll;
}
.musicLyric p{
    margin-bottom: .4rem;
    font-size: .35rem;
    color:yellow
}
.musicLyric .active{
    color: white;
    font-size: .45rem;
}
.detailFooter{
    width: 100%;
    position: fixed;
    bottom: .2rem;
}
.footerTop{
    width: 100%;
    display: flex;
    justify-content: space-around;
}
.footerTop .icon{
    width: .6rem;
    height: .6rem;
}
.footerContent{
    width: 100%;
    height: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.range{
    width:80%;
    height: .06rem;
}
.footerBottom{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
// .footerBottom .icon:nth-child(3){
//     width: .8rem;
//     height: .8rem;
// }
</style>