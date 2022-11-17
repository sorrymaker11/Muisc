<template>
    <div>
        <div class="itemMusicTop">
            <div class="itemLeft">
                <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                    <use xlink:href="#icon-fanhuijiantou"></use>
                </svg>
                <span>歌单</span>
            </div>
            <div class="itemRight">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-sousuo"></use>
                </svg>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-liebiao2"></use>
                </svg>
            </div>
        </div>
        <!-- <div class="content">
            <div class="contentLeft">
                <img :src="playlist.coverImgUrl||playlist.blurPicUrl" alt="" >
            </div>
            <div class="contentRight">
                <p class="musicListName">{{playlist.name}}</p>
                <div class="right_img">
                    <img :src="playlist.creator.backgroundUrl||playlist.artist.picUrl" alt="">
                    <span>{{playlist.creator.nickname||playlist.artist.name}}</span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jinrujiantou"></use>
                    </svg>
                </div>
                <p class="description">
                <span>{{playlist.description}}</span>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jinrujiantou"></use>
                </svg>
            </p>
            </div>
            
        </div> -->
        <musicListIntro :playlist='playlist'>
            <template v-slot:backgroundUrl><img :src="creator.backgroundUrl||creator.picUrl" alt="" class="bgcimg"></template>
            <template v-slot:nickname><span class="nickname">{{creator.nickname||creator.name}}</span></template>
        </musicListIntro>
        <div class="itemMusicFooter">
            <div>
                <svg class="icon" aria-hidden="true" @click="$router.push(`/musicComment?id=${$route.params.id||$route.query.id}&type=${type}`)">
                    <use xlink:href="#icon-pinglun"></use>
                </svg>
                <!-- <span>{{changeCount(playlist.commentCount||playlist.info.commentCount)}}</span> -->
                <slot name="commentCount"></slot>
            </div>
            <div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
                <!-- <span>{{changeCount(playlist.shareCount||playlist.info.shareCount)}}</span> -->
                <slot name="shareCount"></slot>
            </div>
            <div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-xiazai"></use>
                </svg>
                <span>下载</span>
            </div>
            <div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-gouxuan"></use>
                </svg>
                <span>多选</span>
            </div>
        </div>
    </div>
</template>

<script>
import musicListIntro from '@/components/common/musicListIntro'
export default{
    setup(props){
        // console.log(props.playlist);
        // 通过props传值，判断如果数据拿不到，就需要拿session里面的数据(难点)
        // if(props.playlist.creator=''){
        //     props.playlist.creator=JSON.parse(sessionStorage.getItem('itemDetail').playlist).creator
        // };
        // if(props.playlist.info==undefined){props.playlist.info={}}
        // if(props.playlist.artist==undefined){props.playlist.artist={}}
        // console.log(props.creator);
    },
    props:['playlist','creator','type'],
    components:{
        musicListIntro
    },
    
    beforeUnmount(){
        sessionStorage.setItem('playlist',JSON.stringify(this.playlist))
    }
}
</script>

<style lang="scss" scoped>
.bgcimg{
    width: .5rem;
    border-radius:100%;
}
.nickname{
    margin-left: .1rem;
    font-size: .25rem;
}
    .itemMusicTop{
        width: 100%;
        height: 1rem;
        border-bottom-right-radius: .4rem;
        border-bottom-left-radius: .4rem;
        position: fixed;
        top: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: white;
        // padding: .2rem;
        // position: relative;
    }
    .itemLeft,.itemRight{
        width:25%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .4rem;
        margin: 0 10px;
        color: rgb(239,179,54);
    }
    
    .itemMusicFooter{
        width: 100%;
        height: .8rem;
        margin-top: .2rem;
        display: flex;
        justify-content: space-around;
    }
    .itemMusicFooter div{
        display: flex;
        flex-direction: column;
        align-items: center;
        color: rgb(238,179,55);
    }
</style>