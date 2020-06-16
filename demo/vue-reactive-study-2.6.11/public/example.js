import {reactive, Watcher} from "../src/index"
import computed from "../src/computed"
import watch from "../src/watch";
const data = reactive({
    msg: "hellow world",
    number: 1
});
window.data = data;
computed(()=> {
  let i = 999999999
        while(i > 0) {
            i--
        }
  return data.number + 1
});
var ow = new Watcher(() => {
    document.getElementById('app').innerHTML = `
      <p>请在控制台输入data，分别改变data.msg尝试效果</p>
      <p>data.msg被watch了，可以打印出新旧值的变化</p>
      msg is ${data.computed}<br>
    `
  });
// watch(() => data.msg, function(newVal, oldVal){
//   console.log(newVal, oldVal)
// })
/**
 * Dep.target : 
 *  1. [] render watcher
 *  2. [render wathcer] computedWatcher;
 *  
 */
