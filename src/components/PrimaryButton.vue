<template>
  <base-button
    v-bind="$attrs"
    class="bg-brand-500 text-white hover:bg-opacity-90"
  >
    <loading-dots v-if="isLoading" />
    <p v-if="isLoading" class="sr-only">Loading</p>
    <slot v-else></slot>
  </base-button>
</template>
<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
import LoadingDots from "./LoadingDots.vue";
defineProps({
  isLoading: {
    type: Boolean,
    default: false,
  },
});
</script>
