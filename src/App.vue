<script setup>
  import TestContainer from "@/components/TestContainer.vue";
  import CustomInput from "@/components/CustomInput.vue";

  import { provide } from 'vue';
  import {computed, ref} from "vue";
  import FormLogin from "@/components/FormLogin.vue";

  const input = ref('')
  const inputError = computed(()=>{
      return input.value.trim().length ? "" : "Input is required"
  })

  const helperText = computed(()=>{
    return "A smile always expresses positive emotions: happiness, joy, fun. Smile at someone and they'll smile back :)"
  });
  const arrColors = [{
     cityKyiv: '#FF5733',
     cityKharkiv: '#33FF57',
     cityVinnytsya: '#FFFF33',
     cityZakarpattia: '#33FFFF',
     cityZaporizhia: '#000'}
  ];
  const arr = [{
      name: "Kyiv",
      color: "#fff",
      description: "lorem4",
      src: "",
    },
    {
      name: "Kyiv",
      color: "#fff",
      description: "lorem4",
      src: "",
    }
  ];
  provide('colors', arrColors);
</script>

<template>
   <div id="root" class="container ">
     <form-login></form-login>
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
