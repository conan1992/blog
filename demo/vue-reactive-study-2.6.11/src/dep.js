export default class Dep {
    constructor(){
        this.subs = new Set();
    }
    depend(){
        if(Dep.target){
            Dep.target.addDep(this)
        }
    }
    addSub( sub ){
        this.subs.add( sub )
    }
    notify(){
        this.subs.forEach(watcher => {
            watcher.update();
        })
    }
}
Dep.target = null
const targetStack = [];

// 将上一个watcher推到栈里，更新Dep.target为传入的_target变量。
export function pushTarget(_target){
    if(Dep.target) targetStack.push(Dep.target);
    Dep.target = _target
    console.log(targetStack)
}
// 取回上一个watcher作为Dep.target，并且栈里要弹出上一个watcher。
export function popTarget(){
    Dep.target = targetStack.pop();
}