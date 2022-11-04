import service from '..';

export function getMv(data){
    return service({
        method:'GET',
        url:`/top/mv`
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