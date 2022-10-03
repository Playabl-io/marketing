<template>
  <div class="w-screen h-screen flex flex-col bg-white">
    <nav class="flex justify-between items-center py-4 px-6">
      <a
        href="/"
        class="font-paytone text-2xl text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-fuchsia-600 drop-shadow-sm"
      >
        Playabl
      </a>
      <div class="flex items-center gap-6 font-openSans">
        <a href="#features" class="text-slate-900 no-underline"> Features </a>
        <a
          href="https://app.playabl.io/login"
          class="text-brand-500 hover:text-fuchsia-700 no-underline"
        >
          Sign in
        </a>
        <PrimaryButton size="small"> Sign up </PrimaryButton>
      </div>
    </nav>
    <section
      class="grid lg:grid-cols-3 place-content-center grow max-w-5xl mx-auto"
    >
      <div class="lg:col-span-2 relative order-2 lg:order-1">
        <img src="./assets/browser-example.jpg" class="w-full" />
        <img
          src="./assets/mobile-example.png"
          class="absolute w-1/4 z-10 bottom-4 right-2"
        />
      </div>
      <div class="grid place-content-center my-12 order-1 lg:order-2">
        <h1 class="text-6xl font-paytone">Playabl</h1>
        <p class="prose font-openSans mt-2">
          Find your community. Find your game.
        </p>
        <PrimaryButton class="mt-4"> Sign up for free </PrimaryButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import PrimaryButton from "./components/PrimaryButton.vue";
</script>

<style scoped></style>
