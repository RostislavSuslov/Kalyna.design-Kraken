<script setup>
  import TestContainer from "@/components/TestContainer.vue";
  import CustomInput from "@/components/CustomInput.vue";
  import { provide } from 'vue';
  import {computed, ref} from "vue";

  const input = ref('')
  const inputError = computed(()=>{
      return input.value.trim().length ? "" : "Input is required"
  })

  const helperText = computed(()=>{
    return "A smile always expresses positive emotions: happiness, joy, fun. Smile at someone and they'll smile back :)"
  });
  const arrColors = [
    { red: '#FF5733' },
    { green: '#33FF57' },
    { blue: '#FFFF33' },
    { yellow: '#33FFFF' },
    { black: '#000' }
  ];
  provide('colors', arrColors);
</script>

<template>
   <div id="root" class="container ">
     <br>
     <custom-input type="text" label="Input title" :error="inputError" :helperText="helperText"/>
     <div>
       <TestContainer :arrColors="arrColors" />
       <TestContainer :arrColors="arrColors" />
       <TestContainer :arrColors="arrColors" />
       <TestContainer :arrColors="arrColors" />
     </div>
   </div>
</template>

<style lang="scss">
@import './assets/css/style.scss';


</style>
