<template>
    <div class="content">
        <img :src="playlist.coverImgUrl||playlist.blurPicUrl" alt="" class="bgimg">
        <div class="contentLeft">
            <img :src="playlist.coverImgUrl||playlist.blurPicUrl" alt="" >
        </div>
        <div class="contentRight">
            <p class="musicListName">{{playlist.name}}</p>
            <div class="right_img">
                <slot name="backgroundUrl"></slot>
                <!-- <img :src="creator.backgroundUrl" alt=""> -->
                <slot name="nickname"></slot>
                <!-- <span>{{creator.nickname}}</span> -->
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
</template>
<script>
    export default{
        props:['playlist']
    }
</script>
<style scoped>

.bgimg{
        width: 100%;
        height: 10rem;
        position: fixed;
        z-index: -1;
        filter:blur(30px); 
    }
.content{
        width: 100%;
        display: flex;
        margin:1.2rem 0 .2rem;
        color: white;
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
.right_img{
    display: flex;
    align-items: center;
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
</style>