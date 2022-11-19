<template>
    <div class="recommendRank">
        <div v-for="item in rank" :key="item.id" class="rankItem" @click="goDetail(item.id)">
            <div class="rank">
                <img v-lazy="item.coverImgUrl" alt="">
            </div>
            <span class="updateTime">{{item.updateFrequency}}</span>
        </div>
    </div>
</template>
<script>
    export default{
        methods:{
            goDetail(id){
                this.$router.push({
                    name:'ItemMusic',
                    query:{
                        id
                    }
                })
            }
        },
        props:['rank']
    }
</script>
<style scoped>
.recommendRank{
    width: 100%;
    display: flex;
    /* justify-content: space-between; */
    flex-wrap: wrap;
}
.rankItem{
    position: relative;
    margin: .2rem .35rem .2rem 0;
}
.rank img{
    width: 2rem;
    border-radius: .2rem;
}
.updateTime{
    position: absolute;
    bottom: .1rem;
    left: .1rem;
    color: white;
    font-size: .24rem;
}
</style>