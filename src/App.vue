<template>
<div class="w-screen h-screen bg-gray-50 grid place-items-center overflow-x-hidden">
  <div class="">
    <img alt="Vue logo" class="mx-auto w-40 h-40" src="./assets/logo.png">

    <button @click="isModel=true" class="py-2 px-4 bg-blue-500 hover:bg-blue-400 w-full text-white shadow">Model</button>
    <button @click="isSidebar=true" class="py-2 px-4 bg-green-500 hover:bg-green-400 w-full text-white shadow mt-3">Sidebar</button>


      <div v-if="isModel"  class="overlay w-screen h-screen absolute top-0 left-0 grid place-items-center">
        <Model @close="isModel=false"/>
      </div>

    <div v-if="isSidebar"  class="overlay w-screen h-screen absolute top-0 left-0 flex justify-end">
      <Sidebar @close="isSidebar=false"/>
    </div>

  </div>
</div>

</template>

<script>

import Model from "@/components/Model";
import Sidebar from "@/components/Sidebar";
export default {
  name: 'App',
  components: {
    Sidebar,
    Model

  },
  data(){
    return{
      isModel:false,
      isSidebar:false
    }
  }
}
</script>

<style>
.overlay{
  background-color: rgba(0,0,0,.5);
}
</style>
