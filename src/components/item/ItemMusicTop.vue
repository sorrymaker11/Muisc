<template>
    <div>
        <img :src="playlist.coverImgUrl||playlist.blurPicUrl" alt="" class="bgimg">
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
        <div class="content">
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
            
        </div>
        <div class="itemMusicFooter">
            <div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-pinglun"></use>
                </svg>
                <span>{{changeCount(playlist.commentCount||playlist.info.commentCount)}}</span>
            </div>
            <div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-fenxiang"></use>
                </svg>
                <span>{{changeCount(playlist.shareCount||playlist.info.shareCount)}}</span>
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
export default{
    setup(props){
        // console.log(props.playlist);
        // 通过props传值，判断如果数据拿不到，就需要拿session里面的数据(难点)
        if(props.playlist.creator==undefined){
            // props.playlist.creator=JSON.parse(sessionStorage.getItem('itemDetail').playlist).creator
            props.playlist.creator={}
        };
        if(props.playlist.info==undefined){props.playlist.info={};console.log(111);}
        if(props.playlist.artist==undefined){props.playlist.artist={}}
        function changeCount(num){
            if(num>=100000000) return (num/100000000).toFixed(1)+'亿'
            else if(num>=10000) return (num/10000).toFixed(1)+'万'
            else return num
        };
        return {changeCount}
    },
    props:['playlist']
}
</script>

<style lang="scss" scoped>
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
    .bgimg{
        width: 100%;
        height: 10rem;
        position: fixed;
        z-index: -1;
        filter:blur(30px); //图片模糊
    }
    .content{
        width: 100%;
        display: flex;
        margin:1.2rem 0 .2rem;
        color: rgb(238,179,55);
    }
    .content .icon{
        width: .4rem;
        height: .4rem;
    }
    .contentLeft img{
        width: 2.5rem;
        border-radius:.2rem ;
    }
    .contentRight{
        margin:0 .2rem ;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .contentRight img{
        width: .5rem;
        border-radius: .6rem;
    }
    .right_img{
        display: flex;
        align-items: center;
    }
    .right_img span{
        margin-left: .1rem;
        font-size: .25rem;
    }
    .description{
        position: relative;
    }
    .description span{
        font-size: .2rem;
        width: 90%;
        /*将对象转为弹性盒模型展示*/
        display: -webkit-box;
        /*设置弹性盒模型子元素的排列方式*/
        -webkit-box-orient: vertical;
        /*限制文本行数*/
        -webkit-line-clamp: 2;
        /* 溢出隐藏 */
        overflow: hidden;
    }
    .description svg{
        position: absolute;
        right:.2rem;
        top: .1rem;
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