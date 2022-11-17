<template>
    <div>
        <div class="officialRank" v-for="item in rank" :key="item.id" @click="goDetail(item.id)">
            <div class="officialRankLeft">
                <img v-lazy="item.coverImgUrl" alt="">
                <span class="updateTime">{{item.updateFrequency}}</span>
            </div>
            <ul class="officialRankRight">
                <li v-for="(song, index) in item.tracks" :key="index" class="song">
                    <span>{{index+1}}</span>
                    <span>{{song.first}}-{{song.second}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            musicList:[]
        }
    },
    created(){
    },
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
    props:['rank'],
}
</script>
<style scoped>
.officialRank{
    width: 100%;
    display: flex;
    align-items: center;
}
.officialRankLeft{
    position: relative;
}
.officialRankLeft img{
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
.officialRankRight{
    flex: 1;
    overflow: hidden;
    margin-left: .2rem;
}
.song{
    width: 100%;
    line-height: .5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #6d6d6d;
    font-size: .24rem;
}
</style>