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
  import {ArrowLeftOnRectangleIcon} from '@heroicons/vue/20/solid'
  import {ArrowRightOnRectangleIcon} from '@heroicons/vue/20/solid'
  import {ExclamationTriangleIcon} from '@heroicons/vue/20/solid'
  import {HandThumbUpIcon} from '@heroicons/vue/20/solid'
  import {BugAntIcon} from '@heroicons/vue/20/solid'



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

     <div class="button-row flex flex-col p-8 border my-8">
       <h2 class="text-5xl mb-6">Button task</h2>
       <div class="flex flex-wrap gap-4 mb-6">
         <h3 class="block w-full text-3xl mb-1">Default case</h3>
         <CustomButton variation="primary">primary</CustomButton>
         <CustomButton variation="secondary">secondary</CustomButton>
         <CustomButton variation="success">success</CustomButton>
         <CustomButton variation="warning">warning</CustomButton>
         <CustomButton variation="danger">danger</CustomButton>
         <CustomButton variation="info">info</CustomButton>
         <CustomButton disabled variation="primary">disabled</CustomButton>
       </div>
       <div class="flex flex-wrap gap-4 mb-6">
         <h3 class="block w-full text-3xl mb-1">Heroicons case</h3>
         <CustomButton as="a" :left-icon="ArrowLeftOnRectangleIcon">Arrow Left</CustomButton>
         <CustomButton as="a" variation="secondary" :right-icon="ArrowRightOnRectangleIcon">Arrow Right</CustomButton>
         <CustomButton as="a" variation="success" :right-icon="HandThumbUpIcon">success</CustomButton>
         <CustomButton as="a" variation="warning" :right-icon="ExclamationTriangleIcon">warning</CustomButton>
         <CustomButton as="a" variation="danger" :right-icon="BugAntIcon">danger</CustomButton>
         <CustomButton
             as="a"
             href="https://www.svgrepo.com"
             iconUnicorn
         ></CustomButton>
       </div>
       <div class="flex flex-wrap gap-4 mb-6">
         <h3 class="block w-full text-3xl mb-1">Outline case</h3>
         <CustomButton variation="outlinePrimary">primary</CustomButton>
         <CustomButton variation="outlineSecondary">secondary</CustomButton>
         <CustomButton variation="outlineSuccess">success</CustomButton>
         <CustomButton variation="outlineWarning">warning</CustomButton>
         <CustomButton variation="outlineDanger">danger</CustomButton>
         <CustomButton variation="outlineInfo">info</CustomButton>
       </div>
       <div class="flex flex-wrap gap-4 mb-6">
         <h3 class="block w-full text-3xl mb-1">Custom icon</h3>
         <CustomButton iconCherry variation="primary">primary</CustomButton>
         <CustomButton iconHeartsBlue variation="secondary">secondary</CustomButton>
         <CustomButton iconHeartsYellow variation="success">success</CustomButton>
         <CustomButton iconHugs variation="warning">warning</CustomButton>
         <CustomButton iconMagic variation="danger">danger</CustomButton>
         <CustomButton iconPetard variation="info">info</CustomButton>
         <CustomButton disabled variation="primary">disabled</CustomButton>
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
