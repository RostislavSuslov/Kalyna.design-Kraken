<script setup>
  import {computed} from "vue";
  import {cva} from "class-variance-authority";
  import IconChery from '@/components/icons/IconCherry.vue';
  import IconHeartsBlue from '@/components/icons/IconHeartsBlue.vue';
  import IconHeartsYellow from '@/components/icons/IconHeartsYellow.vue';
  import IconHugs from '@/components/icons/IconHugs.vue';
  import IconMagic from '@/components/icons/IconMagic.vue';
  import IconPetard from "@/components/icons/IconPetard.vue";
  import IconUnicorn from "@/components/icons/IconUnicorn.vue";

  const props = defineProps({
    as: {
      type: [String, Object],
      default: "button",
    },
    variation: {
      type: String,
      validator: val => ["primary", "secondary", "warning", "danger", "text"].includes(val),
      default: "primary",
    },
    leftIcon: Object,
    rightIcon: Object,
    iconCherry: Boolean,
    iconHeartsBlue: Boolean,
    iconHeartsYellow: Boolean,
    iconHugs: Boolean,
    iconMagic: Boolean,
    iconPetard: Boolean,
    iconUnicorn: Boolean,
    disabled: Boolean,
  })

  const buttonClass = computed(()=>{
    return cva("inline-flex items-center justify-center font-bold py-2 px-6 shadow-xl rounded cursor-pointer",
        {
            variants: {
              variation: {
                  primary:   "bg-purple-500 text-white hover:bg-purple-700",
                  secondary: "bg-pink-500   text-white hover:bg-pink-700",
                  success:   "bg-green-500  text-white hover:bg-green-700",
                  warning:   "bg-orange-500 text-white hover:bg-orange-700",
                  danger:    "bg-red-500    text-white hover:bg-red-700",
                  info:      "bg-sky-500    text-white hover:bg-sky-700",

                  outlinePrimary:   "border border-purple-500 text-purple-500 hover:bg-purple-700  hover:text-white",
                  outlineSecondary: "border border-pink-500   text-pink-500   hover:bg-pink-700    hover:text-white",
                  outlineSuccess:   "border border-green-500  text-green-500  hover:bg-green-700   hover:text-white",
                  outlineWarning:   "border border-orange-500 text-orange-500 hover:bg-orange-700  hover:text-white",
                  outlineDanger:    "border border-red-500    text-red-500    hover:bg-red-700     hover:text-white",
                  outlineInfo:      "border border-sky-500    text-sky-500    hover:bg-sky-700     hover:text-white",
              },
              disabled: {
                  true: "!bg-purple-300 !tex-gray-600 hover:bg-gray-200 cursor-not-allowed"
              }
            }
        }
    )({
      variation: props.variation,
      disabled: props.disabled,
    })


  })
</script>

<template>
  <component :is="props.as" :disabled="props.disabled" :class="buttonClass" >
    <IconUnicorn  v-if="props.iconUnicorn" />
    <component
    :is="props.leftIcon"
    :class="[
        'w-5 h-5 mr-2',
         props.iconUnicorn && 'invisible'
         ]"

  />
    <span :class="[props.iconUnicorn && 'invisible']">
        <slot />
    </span>
    <component
        :is="props.rightIcon"
        v-if="!props.iconUnicorn"
        :class="[
        'w-5 h-5 ml-2',
         props.iconUnicorn && 'invisible'
         ]"
    />
    <IconChery :class="[props.iconCherry]" v-if="props.iconCherry" />
    <IconHeartsBlue :class="[props.iconHeartsBlue]" v-if="props.iconHeartsBlue" />
    <IconHeartsYellow :class="[props.iconHeartsYellow]" v-if="props.iconHeartsYellow" />
    <IconHugs :class="[props.iconHugs]" v-if="props.iconHugs" />
    <IconMagic :class="[props.iconMagic]" v-if="props.iconMagic" />
    <IconPetard :class="[props.iconPetard]" v-if="props.iconPetard" />
  </component>
</template>



<style scoped>

</style>