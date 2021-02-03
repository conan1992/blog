<template>
    <button @click="modalOpen=true">弹框</button>
    <teleport to="body">
        <div v-if="modalOpen" class="modal">
            <div>
            I'm a teleported modal! 
            (My parent is "body")
            <button @click="modalOpen = false">
                Close
            </button>
            <Child name="吉良吉影"></Child>
            </div>
        </div>
    </teleport>
</template>
<script>
import Child from "./Child.vue"
export default {
    data(){
        return {
            modalOpen: false
        }
    },
    components: {Child}
}
</script>