<template>
<div>
    <!-- <van-loading type="spinner" color="#1989fa" v-if='loading'/> -->
    <div>
        <ItemMusicTop :playlist="state.playList" :type='"3"'/>
        <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playList.subscribedCount" />
    </div>
</div>
</template>

<script>
import {useRoute} from 'vue-router';
import {reactive,onMounted} from 'vue';
import {getMusicItemList,getItemList} from '@/request/api/item';
import ItemMusicTop from '@/components/item/ItemMusicTop';
import ItemMusicList from '@/components/item/ItemMusicList';
export default{
    setup(){
        const state=reactive({
            playList:{},
            itemList:[]
        });
        onMounted(async()=>{
            let id=useRoute().query.id
            let res=await getMusicItemList(id);
            state.playList=res.data.playlist
            // console.log(state.playList);

            // 获取歌单的歌曲
            let result=await getItemList(id)
            state.itemList=result.data.songs
            // 防止页面刷新导致数据丢失，放到本地存储
            sessionStorage.setItem('itemDetail',JSON.stringify(state))
            // console.log(state.itemList);
        });
        return {state}
    },
    components:{
        ItemMusicTop,ItemMusicList
    },
}
</script>