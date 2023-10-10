<template>
  <pre>
    {{ form }}
  </pre>
  <pre>
    {{ errors }}
  </pre>
  <form
      @submit.prevent="onSubmit"
      class="max-w-md mx-auto my-4 p-4 bg-white rounded-lg shadow-lg"
  >
    <div class="mb-4">
      <custom-input name="login" class="mb-2" :error="errors.login"/>
    </div>
    <div class="mb-4">
      <custom-input type="password" name="password" class="mb-2"/>
    </div>
    <button
        class="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Submit
    </button>
  </form>
</template>

<script setup>
import { watch } from "vue";
import CustomInput from "@/components/provide/CustomInput.vue";
import { useForm } from "@/composables/form.js";
import { object, string } from 'yup';

const { form, errors, checkIsValid } = useForm({
  login: "",
  password: "",
}, object({
  login: string().min(5).max(10).email(),
  password: string().min(5)
}));

const onSubmit = async () => {

  if (await checkIsValid()) {
    console.log(form.value);
  }
  // const validationErrors = validator();
  //
  // Object.keys(validationErrors).forEach((field) => {
  //   errors.value[field] = validationErrors[field];
  // });
  //
  // if (Object.keys(validationErrors).length === 0) {
  //   console.log(form.value);
  // }
};

const clearError = (fieldName) => {
  errors.value[fieldName] = "";
};

// const validator = () => {
//   const validationErrors = {};
//
//   if (!form.value.login) {
//     validationErrors.login = "Login is required";
//   }
//
//   if (!form.value.password) {
//     validationErrors.password = "Password is required";
//   }
//
//   return validationErrors;
// };

// watch(form, () => {
//   const validationErrors = validator();
//   Object.keys(errors.value).forEach((field) => {
//     errors.value[field] = validationErrors[field] || "";
//   });
// });
</script>

