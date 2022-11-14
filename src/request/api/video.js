import service from '..';

export function getMv(area){
    return service({
        method:'GET',
        url:`/mv/all?area=${area}`
    })
}
//获取播放连接
export function getMvDetail(id){
    return service({
        method:'GET',
        url:`/mv/detail?mvid=${id}`,
    })
}
//获取播放连接
export function getMvPlay(id){
    return service({
        method:'GET',
        url:`/mv/url?id=${id}`,
    })
}
//获取视频评论
export function getMvComment(id){
    return service({
        method:'GET',
        url:`/comment/mv?id=${id}`,
    })
}
//给视频评论点赞
export function likeComment(data){
    return service({
        method:'GET',
        url:`/comment/like?id=${data.id}&cid=${data.cid}&t=${data.t}&type=1&cookie=${data.cookie}`,
    })
}