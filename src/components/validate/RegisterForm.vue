<template>
<!--  <Form @submit="onSubmit" v-slot="{isSubmitting}"-->
<!--        :initialValues="initialValue"-->
<!--        :validationSchema="validationSchema"-->
<!--        class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"-->

<!--    <h3 class="block w-full text-3xl mb-8">Registration</h3>-->

<!--    <prepare-button color="success" :right-icon="FireIcon" :loading="isSubmitting">Submit</prepare-button>-->
<!--  </Form>-->

  <Form
      @submit="nextStep, onSubmit"
      :validation-schema="currentSchema"
      keep-values
      v-slot="{ values }"
      class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
  >
    <template v-if="currentStep === 0">
      <ValidationField name="login" label="login" />
      <ValidationField name="email" label="email" />
    </template>

    <template v-if="currentStep === 1">
      <ValidationField type="password" name="password" label="password" />
      <ValidationField type="password" name="confirm_password" label="Confirm Password" />
    </template>

    <template v-if="currentStep === 2">
      <ValidationField type="address" name="address" label="address"  />
      <ValidationField  name="postal_code" label="Postal Code" />

    </template>

    <template v-if="currentStep === 3">
      <label for="terms">Agree to terms and conditions</label>
      <Field name="terms" type="checkbox" id="terms" :value="true" />
      <ErrorMessage name="terms" />
    </template>

    <button v-if="currentStep !== 0" type="button" @click="prevStep" >
      Previous
    </button>

    <button v-if="currentStep !== 3" type="submit"  >Next</button>

    <button v-if="currentStep === 3" type="submit" >Finish</button>


<!--    <prepare-button-->
<!--        v-if="currentStep !== 0"-->
<!--        type="button"-->
<!--        @click="prevStep"-->
<!--        color="success"-->
<!--        :right-icon="FireIcon"-->
<!--        :loading="isSubmitting"-->
<!--    >-->
<!--      Previous-->
<!--    </prepare-button>-->
<!--    <prepare-button-->
<!--        v-if="currentStep-->
<!--        !== 3"-->
<!--        type="submit"-->
<!--        color="success"-->
<!--        :right-icon="FireIcon"-->
<!--        :loading="isSubmitting"-->
<!--    >-->
<!--      Next-->
<!--    </prepare-button>-->
<!--    <prepare-button-->
<!--        v-if="currentStep === 3"-->
<!--        type="submit"-->
<!--        color="success"-->
<!--        :right-icon="FireIcon"-->
<!--        :loading="isSubmitting"-->
<!--    >-->
<!--      Finish-->
<!--    </prepare-button>-->

    <pre>{{ values }}</pre>
  </Form>
</template>

<script setup lang="ts">
// import PrepareButton from "@/components/validate/PrepareButton.vue";
// import {FireIcon} from '@heroicons/vue/20/solid'
import { Form, Field, ErrorMessage } from 'vee-validate';
import { ref, computed } from 'vue';
import * as yup from 'yup';
import ValidationField from "./ValidationField.vue";

const currentStep = ref(0);

// Each step should have its own validation schema
const schemas = [
  yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
  }),
  yup.object({
    password: yup.string().required().min(6),
    confirmPassword: yup
        .string()
        .required()
        .min(6)
        .oneOf([yup.ref('password')], 'Passwords must match'),
  }),
  yup.object({
    address: yup.string().required(),
    postalCode: yup
        .string()
        .required()
        .matches(/^[0-9]+$/, 'Must be numeric'),
  }),
  yup.object({
    terms: yup.bool().required().equals([true]),
  }),
];

const currentSchema = computed(() => {
  return schemas[currentStep.value];
});

function nextStep(values) {
  if (currentStep.value === 3) {
    console.log('Done: ', JSON.stringify(values, null, 2));
    return;
  }

  currentStep.value++;
}

function prevStep() {
  if (currentStep.value <= 0) {
    return;
  }

  currentStep.value--;
}





// const initialValue = {
//   date: "1976-07-20",
//   login: "Commodi adipisci ali",
//   email: "Dolor in minima culp",
//   number:373,
//   password:"Pa$$w0rd!",
// }

const onSubmit = async (...arr) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 1000)
  })


  console.log(arr)
}

</script>

<style scoped>

</style>