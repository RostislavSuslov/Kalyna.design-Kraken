<template>
  <div>
      <div v-if="openModal" class="fixed inset-0 flex items-center justify-center z-50">
        <div class="modal-container">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Hello from the modal!</h2>
          <div class="flex">
            <prepare-button
                color="danger"
                type="button"
                @click="onCloseModal"
            >Close</prepare-button>
            <prepare-button
                color="warning"
                type="button"
                @click="confirmForm"
                :right-icon="RocketLaunchIcon"
            >
              Confirm
            </prepare-button>
          </div>
        </div>
      </div>
  </div>
</template>

<script setup>
import {defineEmits} from 'vue';
import {RocketLaunchIcon} from '@heroicons/vue/20/solid';
import PrepareButton from "./validate/PrepareButton.vue";

defineProps({
    openModal: Boolean,
})

const emit = defineEmits(['confirm', "update:openModal"]);
const onCloseModal = () => {
  emit('update:openModal', false)
}
const confirmForm = () => {
  emit('confirm');
  onCloseModal()
}
</script>

<style lang="scss" scoped>

/* Стили для модального окна */
.modal-container {
  background-color: #f1f2f6; /* Цвет фона */
  border-radius: 10px; /* Скругление углов */
  padding: 20px; /* Внутренний отступ */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Тень */
  width: 300px; /* Ширина */
  &:before{
    content: "";
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: #353535b0;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
}
</style>
