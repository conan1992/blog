import Dep, {pushTarget, popTarget } from "./dep"

export default class Watcher {
    constructor( getter, options = {} ){
        let {lazy, watch, callback} = options;
        this.getter = getter;
        this.deps = [];
        this.watch = watch;
        this.callback = callback;
        this.value = undefined;
        this.lazy = lazy;
        this.dirty = true;
        if(typeof lazy === 'undefined'){
            this.get();  
        }
    }
    depend(){
        let i = this.deps.length;
        console.log('deps: ', this.deps)
        while(i--){
            this.deps[i].depend();
        }
    }
    get(){
        pushTarget(this);
        this.value = this.getter();
        popTarget();
        return this.value
    }
    addDep( dep ){
        this.deps.push( dep );
        dep.addSub(this);
    }
    evaluate(){
        this.get();
        this.dirty = false;
    }
    update(){
        if(this.lazy){
            this.dirty = true;
        }else if(this.watch){
            let oldVal = this.value;
            this.get();
            this.callback && this.callback(this.value, oldVal)
        }else{
            this.get();
        }
        
    }
}