<script setup>
  import { provide } from 'vue';
  import {computed, ref} from "vue";
  import CustomInput from "@/components/CustomInput.vue";
  import FormLogin from "@/components/FormLogin.vue";
  import RegionContainer from "@/components/RegionContainer.vue";
  import arrCities from "@/composables/cities.js"

  const input = ref('')
  const inputError = computed(()=>{
      return input.value.trim().length ? '' : 'Input is required'
  })

  const helperText = computed(()=>{
    return "A smile always expresses positive emotions: happiness, joy, fun. Smile at someone and they'll smile back :)"
  });

  provide('cities', arrCities);
</script>

<template>
   <div id="root" class="container ">
     <form-login></form-login>
     <br>
     <custom-input type="text" label="Input title" :error="inputError" :helperText="helperText"/>
     <div class="grid gap-8">
       <RegionContainer />
       <RegionContainer />
     </div>
   </div>
</template>

<style lang="scss">
  @import './assets/css/style.scss';
</style>
