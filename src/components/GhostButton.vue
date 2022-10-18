<template>
  <base-button
    class="bg-inherit hover:bg-slate-200 text-slate-700"
    v-bind="$attrs"
  >
    <slot></slot>
  </base-button>
</template>
<script setup lang="ts">
import BaseButton from "./BaseButton.vue";
</script>
