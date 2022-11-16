import service from '..';

export function getMusicItemList(data){
    return service({
        method:'GET',
        url:`/playlist/detail?id=${data}`
    })
}
export function getItemList(data){
    return service({
        method:'GET',
        url:`/playlist/track/all?id=${data}&limit=20&offset=0`
    })
}
// 获取歌词信息
export function getMusicLyric(data){
    return service({
        method:'GET',
        url:`/lyric?id=${data}`
    })
}
// 获取歌单评论
export function getMusicComment(data){
    return service({
        method:'GET',
        url:`/comment/playlist?id=${data}`
    })
}