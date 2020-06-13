import Dep from "./dep"
import { isObject } from "./utils"

export default function reactive( data ){
    if(isObject(data)){
        Object.keys(data).forEach(key => {
            defineReactive(data, key);
        })
    }
    return data;
};
function defineReactive(data, key){
    let val = data[key];
    var dep = new Dep();
    Object.defineProperty(data, key,{
        get(){
            dep.depend();
            return val;
        },
        set( newVal ){
            val = newVal;
            console.log(dep)
            dep.notify();//触发更新
        }
    });
    //如果值也是引用类型对象，也要处理为响应式
    if(isObject(val)){
        reactive( val )
    }
}