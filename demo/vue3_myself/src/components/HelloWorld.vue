<template>
  <h1>{{ msg }}</h1>
  <button @click="changeName()">change name</button>
  <User :user="mo"></User>
  <Modal></Modal>
</template>

<script>
import User from "./composition/UserRepositories.vue"
import Modal from "./composition/Modal.vue"
import {provide } from "vue"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {User, Modal},
  data() {
    return {
      mo: "mo1",
      count: 0
    }
  },
  methods: {
    changeName(){
      this.provide = Math.random();
      this.mo = "mo" + this.provide;
    }
  },
  mounted(){
    let context = this;
  },
  setup(){
    provide("test", 'xixi')
  }
}
</script>
