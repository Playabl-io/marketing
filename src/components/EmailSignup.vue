<template>
  <transition
    mode="out-in"
    enter-active-class="transition duration-200 ease-out"
    enter-from-class="transform scale-70 opacity-0 translate-y-2"
    enter-to-class="transform scale-100 opacity-100"
    leave-active-class="transition duration-75 ease-out"
    leave-from-class="transform scale-100 opacity-100"
    leave-to-class="transform scale-95 opacity-0 -translate-y-2"
  >
    <p
      v-if="state === 'subscribed'"
      class="font-openSans font-semibold text-lg text-center h-[72px]"
    >
      Thank you! Please check you email and confirm your subscription
    </p>
    <form v-else class="grid grid-cols-3 gap-2" @submit.prevent="subscribe">
      <p class="text-sm font-semibold mb-1 col-span-full">
        Playabl is currently beta. Sign up to get updates and notified on
        launch.
      </p>
      <input
        v-model="email"
        class="rounded-md col-span-2 h-10"
        aria-label="Email Address"
        placeholder="Email Address"
        required
        type="email"
      />
      <PrimaryButton
        :disabled="state !== 'initial'"
        :is-loading="state === 'subscribing'"
      >
        Subscribe
      </PrimaryButton>
    </form>
  </transition>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import PrimaryButton from "./PrimaryButton.vue";

const email = ref("");
const state = ref<"initial" | "subscribing" | "subscribed">("initial");

async function subscribe() {
  const apiKey = import.meta.env.VITE_CONVERTKIT_API_KEY;
  state.value = "subscribing";
  try {
    await axios.post("https://api.convertkit.com/v3/forms/3675513/subscribe", {
      api_key: apiKey,
      email: email.value,
    });
    state.value = "subscribed";
  } catch (e) {
    console.error(e);
    state.value = "initial";
  }
}
</script>
