<template>
<div v-motion
       :initial="{
         opacity:0,
         scale: 0,
      }"
       :enter="{
         opacity: 1,
         scale: 1,
         transition:{delay:0.5}
       }"
       :leave="{
            y: 100,
            transition:{delay:0.5}
         }"


     class="w-3/4 bg-white shadow bg-white p-5 rounded">
  <div class="flex items-center justify-between">
    <p class="text-xl font-semibold">Header</p>
    <button @click="$emit('close')" class="text-red-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
  <p class="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam, architecto doloremque eaque esse et ex impedit ipsam maxime molestias nulla odio placeat quae quas sequi suscipit temporibus vel. In?</p>
</div>
</template>

<script>
export default {
name: "Model"
}
</script>

<style scoped>

</style>
