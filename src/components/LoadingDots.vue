<template>
  <div class="spinner flex space-x-1">
    <div class="bounce1 bg-white h-3 w-3 rounded-full"></div>
    <div class="bounce2 bg-white h-3 w-3 rounded-full"></div>
    <div class="bounce3 bg-white h-3 w-3 rounded-full"></div>
  </div>
</template>
<style scoped>
.spinner > div {
  animation: bounce-delay 1.4s infinite ease-in-out both;
}

.spinner .bounce2 {
  animation-delay: 160ms;
}
.spinner .bounce3 {
  animation-delay: 320ms;
}

@keyframes bounce-delay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
