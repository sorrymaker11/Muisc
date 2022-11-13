<template>
    <div class="all">
        <div class="top">
            <h3>评论区</h3>
            <div class="topType">
                <span @click="changType('recommend')" :class="{active:nowType==='recommend'}">推荐</span>
                <span @click="changType('hot')" :class="{active:nowType==='hot'}">最热</span>
                <span @click="changType('new')" :class="{active:nowType==='new'}">最新</span>
            </div>
        </div>
        <div class="content" v-for="item in showComment" :key="item.userId">
            <div class="contentLeft"><img :src="item.user.avatarUrl" alt=""></div>
            <div class="contentRight">
                <div class="contentRightTop">
                    <div>
                        <div class="nickname">{{item.user.nickname}}</div>
                        <div class="time">{{item.timeStr}}</div>
                    </div>
                    <div class="like">
                        <span>{{item.likedCount}}</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-dianzan1"></use>
                        </svg>
                    </div>
                </div>
                <div class="comment">
                    {{item.content}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {getMvComment} from '@/request/api/video'
import { throwStatement } from '@babel/types'
export default{
    data(){
        return{
            comment:{},
            showComment:{},
            nowType:"recommend"
        }
    },
    created(){
        this.getMvCommentData()
    },
    methods:{
        getMvCommentData:async function(){
            let id=this.$route.params.id
            let res=await getMvComment(id)
            this.comment=res.data
            this.showComment=res.data.comments
            console.log(this.comment);
        },
        changType(type){
            this.nowType=type;
            if(type==='recommend') this.showComment=this.comment.comments;
            else if(type==='hot') this.showComment=this.comment.hotComments;
            else this.showComment=this.comment.topComments;
        }
    }
}
</script>
<style scoped>
.all{
    width: 90%;
    margin: 0 auto;
    padding-bottom: 1rem;
}
.top{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.topType span{
    margin-right: .2rem;
} 
.content{
    width:100%;
    display: flex;
}
.contentLeft img{
    width: .8rem;
    padding: .2rem 0;
    border-radius: 100%;
}
.contentRight{
    flex: 1;
    padding: .2rem 0;
    margin-left: .2rem;
    border-bottom: 1px solid  #dcdcdc;
}
.contentRightTop{
    display: flex;
    justify-content: space-between;
}
.nickname{
    font-weight: 700;
}
.time{
    color: rgb(195, 188, 188);
    font-size: .24rem;
}
.like{
    display: flex;
    align-items: center;
}
.like span{
    margin-top: .2rem;
}
.like svg{
    font-size: .2rem;
}
.comment{
    margin: .2rem 0;
}
.active{
    font-weight: 600;
}
</style>