import service from '..';

export function getSinger(area){
    return service({
        method:'GET',
        url:`/artist/list?area=${area}&limit=50`
    })
}

export function getSingerDetail(id){
    return service({
        method:'GET',
        url:`/artists?id=${id}`
    })
}

export function getSingerAlbum(id){
    return service({
        method:'GET',
        url:`/artist/album?id=${id}&limit=30`
    })
}
//专辑信息
export function getAlbumDetail(id){
    return service({
        method:'GET',
        url:`/album?id=${id}`
    })
}

export function getAlbumComment(id){
    return service({
        method:'GET',
        url:`/comment/album?id=${id}`
    })
}