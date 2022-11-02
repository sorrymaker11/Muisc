import service from "..";

// 获取首页轮播图
export  function getBanner(){
    return service({
        method:'get',
        url:'banner?type=2'
    })
}

export function getMusicList(){
    return service({
        method:'GET',
        url:'personalized?limit=10',
    })
}
export function getSearchMusic(keyWord){
    return service({
        method:'GET',
        url:`/cloudsearch?keywords= ${keyWord}`,
    })
}