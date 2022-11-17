<template>
    <div>
        <div class="itemListContent">
            <div class="content" v-for="(item,index) in itemList" :key='index'>
                <div class="contentLeft" @click="palyMusic(item,index)">
                    <span v-if="updateType==='footer'">{{index+1}}</span>
                    <img v-else v-lazy="item.al.picUrl" alt="">
                    <div>
                        <h5>{{item.name}}</h5>
                        <div class="autor">
                            <span v-for="autor in item.ar" :key="autor.id">{{autor.name}} &nbsp;</span>
                        </div>
                    </div>
                </div>
                <div class="contentRight">
                    <svg class="icon mv" aria-hidden="true" v-if="item.mv!=0" @click="playMv(item.mv,item.name)">
                        <use xlink:href="#icon-w"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-liebiao2"></use>
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default{
    methods:{
        palyMusic(item,index){
            if(this.updateType==='one') {
                this.$store.commit('musicList/pushPlayList',item)
                this.$store.commit('musicList/updatePlayListIndex',this.$store.state.musicList.playList.length-1)
            }
            else if(this.updateType==='all') {
                this.updatePlayList(this.itemList);
                this.updatePlayListIndex(index)
            }
            else{
                this.updatePlayListIndex(index)
            }
        },
        playMv(id,name){
            this.$router.push({
                name:'videodetail',
                params:{
                    id,
                    name
                }
            })
        },
        
        ...mapMutations('musicList',
                    [
                    'updatePlayList',
                    'updatePlayListIndex',
                    ]),
    },
    props:['itemList','updateType'],
}
</script>

<style scoped>
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
.contentLeft img{
    width: .8rem;
    height: .8rem;
    border-radius:.2rem ;
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