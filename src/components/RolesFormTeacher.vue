<template>
  <form
    @submit="onSubmit"
    class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
  >
    <text-field
      type="email"
      name="email"
      label="Email"
      placeholder="Your email"
    />
    <text-field
      name="phoneNumber"
      type="phone"
      label="Phone"
      placeholder="(999) 99-99-999"
      mask="'+38 (000)-00-00-000'"
    />
    <text-field
      type="text"
      name="series_passport"
      label="Series passport"
      placeholder="AA 123456"
      mask="'SS 000000'"
    />
    <text-field
      type="password"
      name="password"
      label="password"
      placeholder="Your password"
    />
    <text-field
      type="password"
      name="confirmPassword"
      label="Confirm Password"
      placeholder="Confirm password"
    />

    <button
      class="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-sans rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Submit
    </button>
    <pre>{{ errors }}</pre>
    <pre>{{ values }}</pre>
  </form>
</template>

<script setup>
import * as yup from "yup";
import "yup-phone";
import { useForm } from "vee-validate";
import TextField from "@/components/validate/TextField.vue";


const initialValue = {
  person: "",
  name: "",
};

const { handleSubmit, values, errors } = useForm({
  initialValues: initialValue,
  validationSchema: yup.object({
    email: yup.string().required().email(),

    phoneNumber: yup.string().required().min(13),

    series_passport: yup.string().required().min(8),

    password: yup.string().required().min(6),

    confirmPassword: yup
        .string()
        .required()
        .min(6)
        .oneOf([yup.ref("password")]),
  }),
});

const onSubmit = handleSubmit((values) => {
  console.log(JSON.stringify(values, null, 2));
});
</script>