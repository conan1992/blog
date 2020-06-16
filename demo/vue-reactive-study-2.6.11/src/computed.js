import Watcher from "./watcher"
import Dep from "./dep";

export default function computed( getter ){
    const computedWatcher = new Watcher( getter, {lazy: true})
    Object.defineProperty(window.data, "computed", {
        get(){
            if(computedWatcher.dirty){
                computedWatcher.evaluate();
            }
            if(Dep.target){
                computedWatcher.depend();
            }
            return computedWatcher.value;
        }
    })
}