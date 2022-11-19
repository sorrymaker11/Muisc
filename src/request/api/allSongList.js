import service from "..";

// 获取歌单分类
export  function getPlaylistCat(){
    return service({
        method:'get',
        url:'/playlist/hot'
    })
}
// 获取信息
export  function getAllPlaylist(cat){
    return service({
        method:'get',
        url:`/top/playlist/highquality?cat=${cat}`
    })
}
