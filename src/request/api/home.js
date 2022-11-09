import service from "..";

// 获取首页轮播图
export  function getBanner(){
    return service({
        method:'get',
        url:'banner?type=2'
    })
}
// 获取发现好歌单
export function getMusicList(){
    return service({
        method:'GET',
        url:'personalized?limit=10',
    })
}
// 搜索
export function getSearchMusic(keyWord){
    return service({
        method:'GET',
        url:`/cloudsearch?keywords= ${keyWord}`,
    })
}
//登录
export function getPhoneLogin(data){
    return service({
        method:'GET',
        url:`/login/cellphone?phone=${data.phone}&password=${data.password}`,
        widthCredentials: true
    })
}
//获取用户信息
export function getLoginUser(id){
    return service({
        method:'GET',
        url:`/user/playlist?uid=${id}`,
    })
}
// 退出登录
export function getLoginOut(id){
    return service({
        method:'GET',
        url:`/logout`,
    })
}
