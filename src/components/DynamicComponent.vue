<template>
  <div >
    <div class="flex justify-center gap-4 mb-3">
      <button
        class="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-sans rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        v-for="(component, label) in tabs"
        :key="label"
        :class="['tab-button', { active: currentTab === label }]"
        @click="currentTab = label"
      >
        {{ label }}
      </button>
    </div>
    <component :is="tabs[currentTab]" class="tab"></component>
  </div>
</template>

<script setup>
import RolesFormStudent from "@/components/RolesFormStudent.vue";
import RolesFormTeacher from "@/components/RolesFormTeacher.vue";

import { ref } from "vue";

const currentTab = ref("Домівка");

const tabs = {
  Teacher: RolesFormTeacher,
  Student: RolesFormStudent,
};
</script>
