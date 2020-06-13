import {reactive, Watcher} from "../src/index"
import computed from "../src/computed"
import watch from "../src/watch";
const data = reactive({
    msg: "hellow world",
    number: 1
});
const computedNumber = computed(()=> data.number + 1);
var ow = new Watcher(() => {
    document.getElementById('app').innerHTML = `
      <p>请在控制台输入data，分别改变data.msg尝试效果</p>
      <p>data.msg被watch了，可以打印出新旧值的变化</p>
      msg is ${data.msg} -- ${computedNumber.value}<br>
    `
  });
window.data = data;
watch(() => data.msg, function(newVal, oldVal){
  console.log(newVal, oldVal)
})
console.log("watch", ow, data)
