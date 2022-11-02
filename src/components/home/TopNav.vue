<template>
    <div class="TopNav">
        <div class="topleft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-liebiao2"></use>
            </svg>
        </div>
        <div class="topContent">
            <span @click="$router.push('/infoUser')">我的</span>
            <span class="active">发现</span>
            <span>云村</span>
            <span>视频</span>
        </div>
        <div class="topright">
            <svg class="icon" aria-hidden="true" @click="$router.push('/search')">
            <use xlink:href="#icon-sousuo"></use>
            </svg>
        </div>
    </div>
</template>

<style scoped>
    .TopNav{
        width: 100%;
        height: 1rem;
        padding: .2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .TopNav .topContent{
        width: 65%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: .3rem;
    }
    .active{
        font-weight: 700;
    }
</style>