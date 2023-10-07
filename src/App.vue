<script setup>
  import { provide } from 'vue';
  import {computed, ref} from "vue";
  import CustomInput from "@/components/CustomInput.vue";
  import FormLogin from "@/components/FormLogin.vue";
  import RegionContainer from "@/components/RegionContainer.vue";
  import CustomButton from "@/components/CustomButton.vue";
  import ArrCities from "@/composables/cities.js"
  // import {IconCherry} from "@/composables/icons.js"
  // import {IconCherry} from "@/components/icons/icon-cherry.svg"
  import {EnvelopeIcon} from '@heroicons/vue/24/solid';
  import {ArrowLeftOnRectangleIcon} from '@heroicons/vue/20/solid'
  import {ArrowRightOnRectangleIcon} from '@heroicons/vue/20/solid'
  import {ArrowTrendingUpIcon} from '@heroicons/vue/20/solid'
  import {FireIcon} from '@heroicons/vue/20/solid'


  const input = ref('')
  const inputError = computed(()=> {
      return input.value.trim().length ? '' : 'Input is required'
  })

  const helperText = computed(()=>{
    return "A smile always expresses positive emotions: happiness, joy, fun. Smile at someone and they'll smile back :)"
  });
  provide('cities', ArrCities);
</script>
<template>
   <div id="root" class="container ">
     <form-login></form-login>
     <custom-input type="text" label="Input title" :error="inputError" :helperText="helperText"/>

     <div class="button-row flex flex-col">
       <div>
         <CustomButton intent="primary">primary</CustomButton>
         <CustomButton intent="secondary">secondary</CustomButton>
         <CustomButton intent="danger">danger</CustomButton>
         <CustomButton intent="text">text</CustomButton>
         <CustomButton disabled intent="primary">disabled</CustomButton>
       </div>
       <br>
       <div>
         <CustomButton   as="a" :left-icon="ArrowLeftOnRectangleIcon">Arrow Left</CustomButton>
         <CustomButton   as="a" :right-icon="ArrowRightOnRectangleIcon">Arrow Right</CustomButton>
         <CustomButton :right-icon="ArrowTrendingUpIcon">Arrow Right</CustomButton>
         <CustomButton :right-icon="FireIcon">Arrow Right</CustomButton>
          <CustomButton
             as="a"
             href="https://www.svgrepo.com"
             iconUnicorn
             :left-icon="EnvelopeIcon"

         >left iconUnicorn</CustomButton>
       </div>
     </div>


     <div class="grid gap-8">
       <RegionContainer />
       <RegionContainer />
     </div>
   </div>
</template>

<style lang="scss">
  @import './assets/css/style.scss';
</style>
