<template>
  <base-button
    class="bg-inherit hover:bg-gray-100 dark:hover:bg-gray-700 text-current dark:text-slate-100"
    v-bind="$attrs"
  >
    <slot></slot>
  </base-button>
</template>
<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
</script>
