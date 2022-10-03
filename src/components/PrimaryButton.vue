<template>
  <base-button
    v-bind="$attrs"
    class="bg-brand-500 text-white hover:bg-opacity-90"
  >
    <slot></slot>
  </base-button>
</template>
<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
</script>
