<template>
  <component
    :is="element"
    class="flex justify-center items-center font-medium cursor-pointer focus-styles"
    :class="{
      'p-3 h-10': size === 'default',
      'p-2 h-8 text-sm': size === 'small',
      'p-0': size === 'bare',
      'cursor-not-allowed opacity-50': $attrs.disabled,
      'rounded-full': round,
      'rounded-md': !round,
    }"
    v-bind="$attrs"
    :to="to"
  >
    <slot></slot>
  </component>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "default",
  },
  round: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: undefined,
  },
});

const element = computed(() => (props.to ? "router-link" : "button"));
</script>
