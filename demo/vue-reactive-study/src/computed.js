import Watcher from "./watcher"

export default function computed( getter ){
    let def = {};
    const computedWatcher = new Watcher( getter, {computed: true})
    Object.defineProperty(def, "value", {
        get(){
            computedWatcher.dep.depend();
            return computedWatcher.get();
        }
    })
    return def;
}