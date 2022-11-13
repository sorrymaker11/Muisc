<template>
    <div>
        <div class="searchTop">
            <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
                <use xlink:href="#icon-jiantou_xiangzuo"></use>
            </svg>
            <input type="text" placeholder="搜索" v-model="searchKey" @keydown.enter="enterDown">
        </div>
        <div class="searchHistory">
            <div>
                <span class="history">历史记录</span>
                <svg class="icon" aria-hidden="true" @click="delHistory">
                    <use xlink:href="#icon-shanchu"></use>
                </svg>
            </div>
            <span v-for="item in keyWordList" :key="item" class="historyContent" @click="historySearch(item)">
                {{item}}
            </span>
        </div>
        <!-- <div class="itemListContent">
            <div class="content" v-for="(item,index) in searchList" :key='index'>
                <div class="contentLeft" @click="updateIndex(item,i)">
                    <span>{{index+1}}</span>
                    <div>
                        <h5>{{item.name}}</h5>
                        <div class="autor">
                            <span v-for="autor in item.ar" :key="autor.id">{{autor.name}} &nbsp;</span>
                        </div>
                    </div>
                </div>
                <div class="contentRight">
                    <svg class="icon mv" aria-hidden="true" v-if="item.mv!=0">
                        <use xlink:href="#icon-w"></use>
                    </svg>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-liebiao2"></use>
                    </svg>
                </div>
            </div>
        </div> -->
        <MusicListDetail :itemList="searchList" :updateType="'one'"/>
    </div>
</template>

<script>
import {getSearchMusic} from '@/request/api/home';
import MusicListDetail from '@/components/common/MusicListDetail.vue';
    export default{
        data(){
            return{
                keyWordList:[],
                searchKey:'',
                searchList:[]
            }
        },
        mounted(){
                this.keyWordList=JSON.parse(localStorage.getItem('keyWordList')) || []
        },  
        methods:{
            enterDown(){
                if(this.searchKey!=''){
                    // 去重
                    this.keyWordList.unshift(this.searchKey.trim())
                    this.keyWordList=[...new Set(this.keyWordList)]
                    // 固定长度
                    if(this.keyWordList.length>=10){
                        this.keyWordList.pop
                    }
                    localStorage.setItem('keyWordList',JSON.stringify(this.keyWordList))
                    this.searchRes(this.searchKey)
                    this.searchKey=''
                }
            },
            delHistory(){
                localStorage.removeItem('keyWordList')
                this.keyWordList=[]
            },
                // 发送请求关键词搜索
            searchRes:async function(key){
                let res=await getSearchMusic(key)
                    this.searchList=res.data.result.songs
            },
            historySearch(key){
                this.searchRes(key)
            },
        },
        components:{
            MusicListDetail
        }
    }
</script>

<style lang="scss" scoped>
    .searchTop{
        width: 100%;
        height: 1rem;
        padding: .2rem;
        display: flex;
        align-items: center;
    }
    input{
        margin-left: .2rem;
        border: none;
        border-bottom: 1px solid rgb(254, 209, 81);
        width: 90%;
        padding: .1rem;
    }
    .searchHistory{
        width: 100%;
        padding: .2rem;
    }
    .history{
        font-weight: 700;
        position: relative;
    }
    .historyContent{
        padding: .1rem .2rem;
        background-color: rgb(254, 209, 81);
        border-radius: .4rem;
        color: white;
        margin: .1rem .2rem;
        display: inline-block;
    }
    .searchHistory .icon{
        position: absolute;
        right: .2rem;
    }
    .itemListContent{
    width: 100%;
    padding: .2rem;
    margin-bottom:  1rem;
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