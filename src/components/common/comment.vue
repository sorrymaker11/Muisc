<template>
    <div>
        <div class="all">
            <div class="top">
                <h3>评论区</h3>
                <div class="topType">
                    <span @click="changType('recommend')" :class="{active:nowType==='recommend'}">推荐</span>
                    <span @click="changType('hot')" :class="{active:nowType==='hot'}">最热</span>
                    <span @click="changType('new')" :class="{active:nowType==='new'}">最新</span>
                </div>
            </div>
            <div class="noComment" v-show="!showComment[0]">暂无评论，来抢沙发吧~</div>
            <div v-show="showComment[0]">
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
                                <svg class="icon" aria-hidden="true" @click="like({'cid':item.commentId,'t':'1'})">
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
        </div>
    </div>
</template>
<script>
import {getMvComment,likeComment} from '@/request/api/video'
import {getAlbumComment} from '@/request/api/singer'
import {getMusicComment} from '@/request/api/item'
// import { throwStatement } from '@babel/types'
export default{
    data(){
        return{
            comment:{},
            showComment:[],
            nowType:"recommend"
        }
    },
    created(){
        this.getComment()
    },
    methods:{
        getComment(){
            if(this.type==1) this.getMvCommentData()
            else if(this.type==2) this.getAlbumCommentData()
            else this.getMusicCommentData()
        },
        getMvCommentData:async function(){
            let id=this.$route.params.id
            let res=await getMvComment(id)
            this.comment=res.data
            this.showComment=res.data.comments
            // console.log(this.comment);
        },
        getAlbumCommentData:async function(){
            let id=this.$route.query.id
            let res=await getAlbumComment(id)
            this.comment=res.data
            this.showComment=res.data.comments
            // console.log(id);
        },
        getMusicCommentData:async function(){
            let id=this.$route.query.id
            let res=await getMusicComment(id)
            this.comment=res.data
            this.showComment=res.data.comments
        },
        changType(type){
            this.nowType=type;
            if(type==='recommend') this.showComment=this.comment.comments;
            else if(type==='hot') this.showComment=this.comment.hotComments;
            else this.showComment=this.comment.topComments;
        },
        like:async function (data){
            data.id=this.$route.params.id
            data.cookie=localStorage.getItem('cookie')
            let res=await likeComment(data);
            // console.log(res)
            // console.log(data)
        }
    },
    props:['type'],

}
</script>
<style scoped>
.all{
    width: 100%;
    margin: 0 auto;
    padding-bottom: 1rem;
    background-color: #Ffffff;
    min-height: 8rem;
    border-top-right-radius: .2rem;
    border-top-left-radius: .2rem;
}
.top{
    width: 90%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
}
.topType span{
    margin-right: .2rem;
} 
.content{
    width:90%;
    display: flex;
    margin: 0 auto;
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
.noComment{
    text-align: center;
}
</style>