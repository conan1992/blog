import Dep, {pushTarget, popTarget } from "./dep"

export default class Watcher {
    constructor( getter, options = {} ){
        let {computed, watch, callback} = options;
        this.getter = getter;
        this.computed = computed;
        this.watch = watch;
        this.callback = callback;
        this.value = undefined;
        if(computed){
            this.dep = new Dep();
        }else{
            this.get();
        }
        
    }
    depend(){
        this.dep.depend()
    }
    get(){
        pushTarget(this);
        this.value = this.getter();
        popTarget();
        return this.value
    }
    update(){
        if(this.computed){
            this.get();
            this.dep.notify();
        }else if(this.watch){
            let oldVal = this.value;
            this.get();
            this.callback && this.callback(this.value, oldVal)
        }else{
            this.get();
        }
        
    }
}