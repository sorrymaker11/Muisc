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