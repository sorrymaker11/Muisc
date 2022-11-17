<template>
    <div>
        <div class="showSinger" >
            <TopNav/>
            <ul class="top">
                <li @click="showSinger('7')" :class="{active:type=='7'}">华语</li>
                <li @click="showSinger('96')" :class="{active:type=='96'}">欧美</li>
                <li @click="showSinger('8')" :class="{active:type=='8'}">日本</li>
                <li @click="showSinger('16')" :class="{active:type=='16'}">韩国</li>
            </ul>
            <div class="singer">
                <div v-for="item in singer" :key="item.id" class="singerList" @click="goSingerDetail(item.id)">
                    <img v-lazy="item.img1v1Url" alt="">
                    <span>{{item.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {getSinger} from '@/request/api/singer'
import TopNav from "@/components/common/TopNav.vue"
export default{
    data(){
        return{
            singer:[],
            type:'7'
        }
    },
    created(){
        this.showSinger('7')
    },
    methods:{
        showSinger:async function(area){
            this.type=area;
            let res=await getSinger(area);
            this.singer=res.data.artists
            // console.log( res);
        },
        goSingerDetail(id){
            this.$router.push({
                name:'singerdetail',
                params:{
                    id,
                }
            })
        }
    },
    components:{TopNav,}
}
</script>
<style scoped>
.showSinger{
    width: 100%;
}
.top{
    display: flex;
    width: 100%;
    justify-content: space-around;
    background-color: rgb(254, 209, 81);
}
.top li{
    color: white;
}
.singer{
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1rem;
    color: #222;
}
.singerList{
    display: flex;
    align-items: center;
    margin: .2rem 0;
    padding: .2rem 0;
    border-bottom: 1px solid rgb(225, 220, 220);
}
.singerList img{
    width: 1rem;
    border-radius: 100%;
    margin-right: .2rem;
}
.top  .active{
    color: #222;
}
</style>