<template>
  <div class="w-screen min-h-screen flex flex-col bg-white">
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
      </div>
    </nav>
    <section
      class="grid lg:grid-cols-3 gap-8 place-content-center grow max-w-5xl mx-auto pb-12"
    >
      <div class="lg:col-span-2 relative order-2 lg:order-1">
        <img src="../assets/browser-example.jpg" class="w-full" />
        <img
          src="../assets/mobile-example.png"
          class="absolute w-1/4 z-10 bottom-4 right-2"
        />
      </div>
      <div class="grid place-content-center my-12 order-1 lg:order-2">
        <h1 class="text-6xl font-paytone">Playabl</h1>
        <p class="prose font-openSans my-2">
          Find your community. Find your game.
        </p>
        <PrimaryButton @click="goToFeatures">
          Learn More <ArrowSmallRightIcon class="h-6 w-6 ml-1" />
        </PrimaryButton>
      </div>
    </section>
  </div>
  <section
    id="features"
    class="grid gap-8 px-8 bg-slate-100 min-h-screen py-12 font-openSans"
  >
    <div class="grid place-content-center">
      <p class="text-4xl font-paytone text-center">
        Roleplaying communities
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-fuchsia-600 drop-shadow-sm"
        >
          reimagined
        </span>
      </p>
      <p class="prose text-center mt-4 mx-auto">
        Playabl is the first purpose built community management tool for online
        roleplaying communities
      </p>
    </div>
    <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-4">
      <FeatureCard>
        <FeatureCardHeadline>
          <CalendarDaysIcon class="h-6 w-6 text-brand-500" />
          <p class="text-lg font-semibold">Community calendar</p>
        </FeatureCardHeadline>
        <p>
          View all of your community's games in one place, and use convenient
          filters and search options to find games of most interest to you
        </p>
      </FeatureCard>
      <FeatureCard>
        <FeatureCardHeadline>
          <ClockIcon class="h-6 w-6 text-brand-500" />
          <p class="text-lg font-semibold">Game RSVPs and Waitlist</p>
        </FeatureCardHeadline>
        <p>
          Every game has an RSVP and Waitlist, and players are automatically
          notified when they are pulled from the waitlist
        </p>
      </FeatureCard>
      <FeatureCard>
        <FeatureCardHeadline>
          <ShieldCheckIcon class="h-6 w-6 text-brand-500" />
          <p class="text-lg font-semibold">Community management tools</p>
        </FeatureCardHeadline>
        <p>
          Community management tools let you manage members, choose who can post
          games, and define access tiers for priority RSVP access
        </p>
      </FeatureCard>
      <FeatureCard>
        <FeatureCardHeadline>
          <UserIcon class="h-6 w-6 text-brand-500" />
          <p class="text-lg font-semibold">User profiles</p>
        </FeatureCardHeadline>
        <p>
          Create and manage your user profile, including linking to your own
          projects and games on
          <a
            href="https://itch.io"
            target="_blank"
            class="text-blue-700 hover:underline"
            >Itch.io</a
          >
        </p>
      </FeatureCard>
      <FeatureCard>
        <PremiumFeatureCardHeadline>
          <CurrencyDollarIcon class="h-6 w-6 text-brand-500" />
          <p class="text-lg font-semibold">
            Paid games, membership, and events
          </p>
        </PremiumFeatureCardHeadline>

        <p>
          Collect payment for games or membership, and plan events that can have
          a flat fee or per game ticket model
        </p>
      </FeatureCard>
      <FeatureCard>
        <PremiumFeatureCardHeadline>
          <BoltIcon class="h-6 w-6 text-brand-500" />
          <p class="text-lg font-semibold">Integrations</p>
        </PremiumFeatureCardHeadline>
        <p>
          Integrate to where your community hangs out including Discord, Slack,
          or anywhere that receives an HTTP request
        </p>
      </FeatureCard>
    </div>
    <div class="self-center">
      <EmailSignup />
    </div>
  </section>
</template>

<script setup lang="ts">
import PrimaryButton from "../components/PrimaryButton.vue";
import EmailSignup from "../components/EmailSignup.vue";
import FeatureCard from "../components/FeatureCard.vue";
import {
  ArrowSmallRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  BoltIcon,
  UserIcon,
} from "@heroicons/vue/24/outline";
import { CalendarDaysIcon } from "@heroicons/vue/24/solid";
import FeatureCardHeadline from "../components/FeatureCardHeadline.vue";
import PremiumFeatureCardHeadline from "../components/PremiumFeatureCardHeadline.vue";

function goToFeatures() {
  const el = document.getElementById("features");
  el?.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped></style>
