<template>
<div>
    <div>
        <TopNav/>
        <div class="rankList" v-if="recommend[0]">
            <div class="recommendRankList">
                <h3 class="rankTitle">榜单推荐</h3>
                <rankList :rank='recommend'/>
            </div>
            <div class="officialRankList">
                <h3 class="rankTitle">官方榜</h3>
                <officialList :rank='official'/>
            </div>
            <div>
                <h3 class="rankTitle">精选榜</h3>
                <rankList :rank='choice'/>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import {getRank} from '@/request/api/rank';
import TopNav from "@/components/common/TopNav.vue"
import rankList from '@/components/rank/rankList.vue'
import officialList from '@/components/rank/officialList.vue'
    export default{
        data(){
            return{
                recommend:[],
                official:[],
                choice:[]
            }
        },
        created(){
            this.getRankData()
        },
        methods:{
            getRankData:async function(){
                let res= await getRank()
                this.official=res.data.list.splice(0,4)
                this.recommend=res.data.list.splice(0,3)
                this.choice=res.data.list
                // console.log(this.official);
            }
        },
        components:{TopNav,rankList,officialList,}
    }
</script>
<style scoped>
.rankList{
    width: 95%;
    margin: 0 auto 1rem;
}
.recommendRankList{
    width: 100%;
}
.rankTitle{
    color: #222;
}
.officialRank img{
    width: 2rem;
    border-radius: .2rem;
}
</style>