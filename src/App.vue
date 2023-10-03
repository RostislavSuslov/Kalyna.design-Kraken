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

  import KyivGerb from './assets/img/gerbs-Kyiv.png'
  import KharkivGerb from './assets/img/gerbs-Kharkiv.png'
  import VinnytsyaGerb from './assets/img/gerbs-Vinnytsya.png'
  import ZakarpattiaGerb from './assets/img/gerbs-Zakarpattia.png'
  import ZaporizhiaGerb from './assets/img/gerbs-Zaporizhia.png'

  const arrCities = [{
      id: 1,
      name: "Kyiv",
      src: KyivGerb,
      description: "lorem1",
    },
    {
      id: 2,
      name: "Kharkiv",
      src: KharkivGerb,
      description: "lorem2",
    },
    {
      id: 3,
      name: "Vinnytsya",
      src: VinnytsyaGerb,
      description: "lorem3",
    },
    {
      id: 4,
      name: "Zakarpattia",
      src: ZakarpattiaGerb,
      description: "lorem4",
    },
    {
      id: 5,
      name: "Zaporizhia",
      src: ZaporizhiaGerb,
      description: "lorem5",
    },
  ];
  provide('cities', arrCities);

</script>

<template>
   <div id="root" class="container ">
     <form-login></form-login>
     <br>
     <custom-input type="text" label="Input title" :error="inputError" :helperText="helperText"/>
     <div class="grid gap-8">
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
