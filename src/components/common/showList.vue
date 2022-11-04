<template>
    <van-swipe :loop="false" :width="153" class="my-swipe" :show-indicators="false">
        <van-swipe-item v-for="item in playlist" :key="item.id">
            <router-link :to="{path:'/itemMusic',query:{id:item.id}}">
                <img v-lazy="item.coverImgUrl||item.picUrl" alt="">
                <span class="playCount">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofan"></use>
                    </svg>
                    {{changeCount(item.playCount)}}
                </span>
                <span class="name">{{item.name}}</span>
            </router-link>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
export default {
    methods:{
        changeCount(num){
                if(num>=100000000) return (num/100000000).toFixed(1)+'亿'
                else if(num>=10000) return (num/10000).toFixed(1)+'万'
                else return num
            }
  },
  props:['playlist']
}
</script>

<style scoped>
.my-swipe{
    height: 100%;
}
img{
    width: 100%;
    height:3rem;
    border-radius: .2rem;
}
.playCount{
    position: absolute;
    top: .1rem;
    right: .3rem;
    line-height: 29px;
}
.name{
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
}
.icon{
    width: .3rem;
    height: .3rem;
}
.van-swipe-item{
    width: 3rem !important;
}

.van-swipe-item{
    width: 2.2rem;
    margin-right: .1rem;
}
</style>