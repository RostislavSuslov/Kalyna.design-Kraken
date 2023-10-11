<template>
  <Form @submit.prevent="onSubmit" class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
  >
    <h3 class="block w-full text-3xl mb-8">Log in</h3>
<!--<prepare-input label="login" name="login"></prepare-input>-->
<!--<prepare-input label="password" type="password" name="password"></prepare-input>-->
<!--<prepare-input label="date" type="date" name="date"></prepare-input>-->
<!--<prepare-button :right-icon="ArrowRightOnRectangleIcon">Submit</prepare-button>-->
    <div class="input-wrapper w-full relative max-w-screen-md mx-auto border-2 p-4 mb-6">
      <Field name="login" type="login" :rules="loginRules" class="peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"/>
      <label for="login" class="pointer-events-none bg-white absolute left-3 top-0 mb-0  origin-[0_0] truncate p-[0.37rem] leading-[1] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primaryColor peer-data-[te-input-state-active]:-translate-y-[0.8rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primaryColor">
        login
      </label>
      <ErrorMessage name="login" />
    </div>
    <div class="input-wrapper w-full relative max-w-screen-md mx-auto border-2 p-4 mb-6">
      <Field name="mail" type="mail" :rules="mailRules" class="peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"/>
      <label for="mail" class="pointer-events-none bg-white absolute left-3 top-0 mb-0  origin-[0_0] truncate p-[0.37rem] leading-[1] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primaryColor peer-data-[te-input-state-active]:-translate-y-[0.8rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primaryColor">
        mail
      </label>
      <ErrorMessage name="mail" />
    </div>
    <div class="input-wrapper w-full relative max-w-screen-md mx-auto border-2 p-4 mb-6">
      <Field name="password" type="password" :rules="passwordRules" class="peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"/>
      <label for="password" class="pointer-events-none bg-white absolute left-3 top-0 mb-0  origin-[0_0] truncate p-[0.37rem] leading-[1] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primaryColor peer-data-[te-input-state-active]:-translate-y-[0.8rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primaryColor">
        password
      </label>
      <ErrorMessage name="password" />
    </div>
    <div class="input-wrapper w-full relative max-w-screen-md mx-auto border-2 p-4 mb-6">
      <Field name="date" type="date" :rules="dateRules" class="peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"/>
      <label for="date" class="pointer-events-none bg-white absolute left-3 top-0 mb-0  origin-[0_0] truncate p-[0.37rem] leading-[1] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primaryColor peer-data-[te-input-state-active]:-translate-y-[0.8rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primaryColor">
        date
      </label>
      <ErrorMessage name="date" />
    </div>
    <div class="input-wrapper w-full relative max-w-screen-md mx-auto border-2 p-4 mb-6">
      <Field name="number" type="number" :rules="numberRules" class="peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"/>
      <label for="number" class="pointer-events-none bg-white absolute left-3 top-0 mb-0  origin-[0_0] truncate p-[0.37rem] leading-[1] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.8rem] peer-focus:scale-[0.8] peer-focus:text-primaryColor peer-data-[te-input-state-active]:-translate-y-[0.8rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primaryColor">
        number
      </label>
      <ErrorMessage name="number" />
    </div>
    <prepare-button color="success" :right-icon="FireIcon">Submit</prepare-button>
  </Form>
</template>

<script setup>
import PrepareButton from "@/components/validate/PrepareButton.vue";
import {FireIcon} from '@heroicons/vue/20/solid'

import { Field, Form, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';

const loginRules = yup.string().min(5).max(15).matches(/^[A-Z][a-z]*$/, 'Имя пользователя должно начинаться с заглавной буквы');
const passwordRules = yup.string().required().min(8);
const mailRules = yup.string().required().email();
const dateRules = yup.date().max(12-11-2010, 'возрастное ограничение, вход строго с 18 лет');
const numberRules = yup.number().required().min(18)

function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return 'This is required';
}










// const form = ref({
//   login: "Rost",
//   password: "123",
//   date:"21",
// });
// const onSubmit =()=> {
//
// }



</script>
<style scoped>
[role="alert"] {
  color: red;
}
</style>