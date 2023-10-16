<script setup lang="ts">
import * as yup from 'yup';
import "yup-phone";
import {FireIcon} from '@heroicons/vue/20/solid'
import {ArrowLeftIcon} from '@heroicons/vue/20/solid'
import {ArrowRightIcon} from '@heroicons/vue/20/solid'
import {Form, Field} from 'vee-validate';
import {ref, computed} from 'vue';
import PrepareButton from "./PrepareButton.vue";
import ValidationField from "./FieldWrapper.vue";

const currentStep = ref(0);
const PERSONS = {
  teacher: "Teacher",
  student: "Student",
  partner: "Partner",
}

const initialValue = {
  person: PERSONS.teacher,
  name: "",
}

const schemas = [
  yup.object({

  }),
  yup.object({
    name: yup.string().required(),
    email: yup.string().required().email(),
    passport: yup.string().when("person",{
      is: PERSONS.teacher,
      then: (schema)=> schema.required().min(8),
    }),
  }),
  yup.object({
    //.matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
    phoneNumber: yup.string().when("person", {
      is: PERSONS.teacher,
      then: (schema)=> schema.required(),
    }).required(),
    password: yup.string().required().min(6).matches(/[a-zA-Z]/,'invalid password' ),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password')], 'Passwords must match'),
  }),
];


const currentSchema = computed(() => {
  return schemas[currentStep.value];
});

function nextStep(values) {
  if (currentStep.value === 2) {
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

const onSubmit = async (...arr) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, 1500)
  })
  console.log(arr)
}

const onSubmitWrapper = async (formValues) => {
  nextStep(formValues);
  await onSubmit(formValues);
};
</script>
<template>
  <Form
      @submit="onSubmitWrapper"
      :validation-schema="currentSchema"
      keep-values
      v-slot="{ values, errors, isSubmitting }"
      class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
      :initialValues="initialValue"
  >
    <h3 class="block w-full text-3xl mb-8">Log in</h3>
    <template v-if="currentStep === 0">
      <label>Select your role:</label>
      <ValidationField type="radio" name="person" :label="key" v-for="(value, key) in PERSONS" :value="value" :key="value"/>
    </template>
    <template v-if="currentStep === 1">
      <ValidationField name="name" label="Name" placeholder="Your name"/>
      <ValidationField type="email" name="email" label="Email" placeholder="Your email"/>
      <ValidationField v-if="values.person === PERSONS.teacher" type="text" name="passport" label="Passport" placeholder="XX000000"/>
    </template>

    <template v-if="currentStep === 2">
      <ValidationField
          v-slot="{_class}"
          v-if="values.person === PERSONS.teacher"
          name="phoneNumber"
          label="Phone"
      >
        <Field name="phoneNumber"
               type="phone"
               placeholder="(999) 999-9999"
               :class="_class"
               v-mask="'(000)-00-00-000'"
        />
      </ValidationField>
      <ValidationField type="password" name="password" label="Password" placeholder="Your password"/>
      <ValidationField type="password" name="confirmPassword" label="Confirm Password" placeholder="Your password"/>
    </template>

    <div class="flex flex-col">
      <prepare-button color="success" :right-icon="ArrowLeftIcon" v-if="currentStep !== 0" type="button" @click="prevStep">Previous</prepare-button>
      <prepare-button color="success" :right-icon="ArrowRightIcon" v-if="currentStep !== 2" type="submit">Next</prepare-button>
      <prepare-button color="success" :right-icon="FireIcon" v-if="currentStep === 2" type="submit" :loading="isSubmitting">Submit</prepare-button>
    </div>
    <pre>{{ values }}</pre>
    <pre>{{errors}}</pre>
  </Form>

</template>

<style>
</style>
