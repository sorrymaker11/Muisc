import { Button, Swipe, SwipeItem,Popup ,Loading,Overlay,Toast   } from 'vant';
// 放入数组
let plugins=[
    Swipe,SwipeItem,Button,Popup,Loading,Overlay,Toast 
]
export default function getVant(app){
    plugins.forEach((item)=>{
        return app.use(item)
    })
}