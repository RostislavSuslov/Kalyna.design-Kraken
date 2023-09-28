<script setup>
  import CustomInput from "@/components/CustomInput.vue";
  import {computed, ref} from "vue"

  const input = ref('')
  const inputError = computed(()=>{
      return input.value.trim().length ? "" : "Input is required"
  })

  const helperText = computed(()=>{
    return "A smile always expresses positive emotions: happiness, joy, fun. Smile at someone and they'll smile back :)"
  })

</script>

<template>
   <div id="root" class="container ">
     <br>
     <custom-input type="text" label="Input title" :error="inputError" :helperText="helperText"/>

   </div>
</template>

<style lang="scss">
@import './assets/css/style.scss';

</style>
