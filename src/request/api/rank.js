import service from '..';

export function getRank(){
    return service({
        method:'GET',
        url:`/toplist/detail`
    })
}