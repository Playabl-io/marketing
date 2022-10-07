<template>
  <div>
    <FeatureCardHeadline class="mb-0">
      <slot></slot>
    </FeatureCardHeadline>
    <p class="text-xs text-slate-700 font-semibold mt-1 mb-4 uppercase">
      premium plans only
    </p>
  </div>
</template>
<script lang="ts" setup>
import FeatureCardHeadline from "./FeatureCardHeadline.vue";
</script>
