<template>
  <form
      @submit.prevent="onSubmit"
      class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
  >
     <h3 class="block w-full text-3xl mb-8">Log in</h3>
     <custom-input  label="login" name="login" placeholder="login"/>
     <custom-input type="mail" label="mail" name="mail" placeholder="mail"/>
     <custom-input type="password" label="password" name="password" placeholder="password"/>
     <custom-input type="date" label="date" name="date" placeholder="mail"/>
     <custom-input type="number" label="number" name="number" placeholder="mail"/>
     <prepare-button :right-icon="ArrowRightOnRectangleIcon">Submit</prepare-button>
  </form>
  <pre>
    {{ form }}
  </pre>
  <pre>
    {{ errors }}
  </pre>
</template>

<script setup>
import CustomInput from "@/components/provide/CustomInput.vue";
import PrepareButton from "@/components/validate/PrepareButton.vue";
import {ArrowRightOnRectangleIcon} from '@heroicons/vue/20/solid'
import { useForm } from "@/composables/form.js";
import { object, string } from 'yup';
import * as yup from "yup";

const { form, errors, checkIsValid } = useForm({
  login: "",
  password: "",
}, object({
  // login: string().min(5).max(10).email(),
  // password: string().min(5),
  // birthDate: yup.date().max(new Date()),
  // date: yup.date().min(11-11-2022),
  // number: yup.number().required().min(18), // Валидация для поля "number"
}));

const onSubmit = async () => {

  if (await checkIsValid()) {
    console.log(form.value);
  }
};

const clearError = (fieldName) => {
  errors.value[fieldName] = "";
};
</script>

