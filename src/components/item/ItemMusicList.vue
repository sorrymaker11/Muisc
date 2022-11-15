<template>
    <div class="itemMusicList">
        <div v-if="!itemList.length">
            <van-overlay :show="true">
                <div class="wrapper" >
                    <van-loading type="spinner" size="24px" />
                </div>
            </van-overlay>
            <van-loading type="spinner" size="24px" />
        </div>
        <div v-else>
        <div class="itemListTop">
            <div class="topLeft">
                <div>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-bofang"></use>
                    </svg>
                </div>
                <div>
                    <span>播放全部</span>
                    <span>(共{{itemList.length}}首)</span>
                </div>
            </div>
            <div class="topRight">+ <span> 收藏({{changeCount(subscribedCount)}})</span></div>
        </div>
        <MusicListDetail :itemList='itemList' :updateType="'all'" />
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
import {getSubscribe} from '@/request/api/home'
import MusicListDetail from '@/components/common/MusicListDetail.vue';
export default{
    setup(props){
        function changeCount(num){
            if(num>=100000000) return (num/100000000).toFixed(1)+'亿'
            else if(num>=10000) return (num/10000).toFixed(1)+'万'
            else return num
        };
        
        return {changeCount}
    },
    props:['itemList','subscribedCount'],
    methods:{
        ...mapMutations('musicList',['updatePlayList','updatePlayListIndex']),
    },
    components:{
        MusicListDetail
    }
}
</script>

<style lang="scss" scoped>
 .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
.itemMusicList{
    width: 100%;
    background-color: #fff;
    padding: 0 0.2rem;
    margin: .2rem 0 1rem;
    border-top-right-radius: .4rem;
    border-top-left-radius: .4rem;
    min-height: 10rem;
}
.itemListTop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.topLeft{
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: 700;
}
.topLeft span:nth-child(2){
    font-weight: 400;
    font-size: .25rem;
    color:gray
}
.topRight{
    width: 32%;
    height:.8rem;
    color: white;
    background-color: rgb(239,179,54);
    border-radius: .4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .4rem;
}
.topRight span{
    font-size: .3rem;
    margin-left: .1rem;
    color: white;
}
.itemListContent{
    width: 100%;
}
.content{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
}
.contentLeft{
    width: 60%;
    height: 100%;
    display: flex;
    align-items: center;
}
.contentLeft>div{
    margin-left:.2rem;
}
.contentLeft div h5{
    display: -webkit-box;
    /*设置弹性盒模型子元素的排列方式*/
    -webkit-box-orient: vertical;
    /*限制文本行数*/
    -webkit-line-clamp: 1;
    /* 溢出隐藏 */
    overflow: hidden;
}
.autor{
    font-size: .25rem;
    color: gray;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}
.contentRight{
    display: flex;
    align-items: center;
}
.mv{
    margin-right: .3rem;
}   
</style>
