<script setup>
  import CustomInput from "@/components/CustomInput.vue";
  import {computed, ref} from "vue"

  const input = ref('')
  const inputError = computed(()=>{
      return input.value.trim().length ? "" : "Input is required"
  })

  const helperText = computed(()=>{
    return "Please enter your full name in this text box.!"
  })

</script>

<template>
   <div id="root" class="container ">
     <br>
     <custom-input :type="number" label="Input title" :error="inputError" :helperText="helperText"/>
   </div>
</template>

<style lang="scss">
@import './assets/css/style.scss';

</style>
