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
        Playabl offers best in class tools to build, manage, and find
        roleplaying communities and games
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
          filters and search options to find the games of most interest to you
        </p>
      </FeatureCard>
      <FeatureCard>
        <FeatureCardHeadline>
          <ClockIcon class="h-6 w-6 text-brand-500" />
          <p class="text-lg font-semibold">Game RSVPs and Waitlist</p>
        </FeatureCardHeadline>
        <p>
          Every game has RSVP and Waitlist tracking, and players are
          automatically notified when they are pulled from the waitlist
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
          Create and manage your user profile, and promote your own projects and
          games
        </p>
      </FeatureCard>
      <FeatureCard>
        <FeatureCardHeadline>
          <CurrencyDollarIcon class="h-6 w-6 text-brand-500" />
          <p class="text-lg font-semibold">
            Paid games, membership, and events
          </p>
        </FeatureCardHeadline>

        <p>
          Collect payment for games or membership, and plan and run special
          events for your community
        </p>
      </FeatureCard>
      <FeatureCard>
        <PremiumFeatureCardHeadline>
          <BoltIcon class="h-6 w-6 text-brand-500" />
          <p class="text-lg font-semibold">Integrations</p>
        </PremiumFeatureCardHeadline>
        <p>
          Integrate to where your community hangs out — including Discord,
          Slack, or anywhere that receives an HTTP request — and never miss a
          game post
        </p>
      </FeatureCard>
      <GhostButton class="col-span-full" @click="goToComparison">
        See how Playabl compares <ChevronDoubleDownIcon class="h-5 w-5 ml-1" />
      </GhostButton>
    </div>
  </section>
  <section
    class="px-8 py-16 min-h-[75vh] font-openSans bg-rose-200 text-brand-500 grid md:grid-cols-2 gap-12"
  >
    <p
      class="max-w-2xl p-4 text-4xl font-semibold leading-relaxed self-center font-paytone"
    >
      Playabl improves the experience for players and community managers
    </p>
    <div class="grid gap-8 self-center">
      <div>
        <h3 class="font-bold mb-1">For Players</h3>
        <p class="text-lg leading-normal">
          Stop scrolling through endless Discord groups and looking-for-game
          posts, and use smart tools to find groups that share your interests
          and play style.
        </p>
      </div>
      <div>
        <h3 class="font-bold mb-1">For Community Managers</h3>
        <p class="text-lg leading-normal">
          Attract members that match your group's culture and play style, and
          level up your community management with purpose built tools. Give your
          members tools they'll love to use.
        </p>
      </div>
    </div>
    <div class="col-span-full grid place-content-center">
      <PrimaryButton @click="goToSignUp">Find your community</PrimaryButton>
    </div>
  </section>
  <section
    id="comparison"
    class="min-h-screen bg-white font-openSans py-12 px-8"
  >
    <h3 class="text-4xl text-center font-paytone mb-12">
      How Playabl Compares
    </h3>
    <div>
      <table class="w-full">
        <div
          class="sticky md:relative top-0 comparison-table-grid-headers bg-white py-4 md:py-0 px-6 text-center"
        >
          <div
            class="justify-self-center self-end font-semibold text-sm md:text-lg [grid-area:item]"
          ></div>
          <div
            class="justify-self-center self-end font-semibold text-sm md:text-lg [grid-area:playabl]"
          >
            Playabl
          </div>
          <div
            class="justify-self-center self-end font-semibold text-sm md:text-lg [grid-area:chat]"
          >
            Chat apps w/ bots
          </div>
          <div
            class="justify-self-center self-end font-semibold text-sm md:text-lg [grid-area:reddit]"
          >
            Reddit
          </div>
          <div
            class="justify-self-center self-end font-semibold text-sm md:text-lg [grid-area:roll20]"
          >
            Roll 20
          </div>
        </div>
        <tbody>
          <tr class="comparison-table-grid">
            <td class="justify-self-start [grid-area:item]">
              Discover communities and easily find groups that match your
              interests
            </td>
            <td class="[grid-area:playabl] pt-4 md:pt-0">
              <CheckCircleIcon class="h-6 w-6 text-green-600" />
            </td>
            <td class="[grid-area:chat] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
            <td class="[grid-area:reddit] pt-4 md:pt-0">
              <CheckCircleIcon class="h-6 w-6 text-green-600" />
            </td>
            <td class="[grid-area:roll20] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
          </tr>
          <tr class="comparison-table-grid">
            <td class="justify-self-start [grid-area:item]">
              Search for games based on system, tags, use of safety tools, and
              full text
            </td>
            <td class="[grid-area:playabl] pt-4 md:pt-0">
              <CheckCircleIcon class="h-6 w-6 text-green-600" />
            </td>
            <td class="[grid-area:chat] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
            <td class="[grid-area:reddit] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
            <td class="[grid-area:roll20] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
          </tr>
          <tr class="comparison-table-grid">
            <td class="justify-self-start [grid-area:item]">
              Easily manage game RSVPs, waitlist, and details from a dedicated
              page
            </td>
            <td class="[grid-area:playabl] pt-4 md:pt-0">
              <CheckCircleIcon class="h-6 w-6 text-green-600" />
            </td>
            <td class="[grid-area:chat] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
            <td class="[grid-area:reddit] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
            <td class="[grid-area:roll20] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
          </tr>
          <tr class="comparison-table-grid">
            <td class="justify-self-start [grid-area:item]">
              Setup and run special events for the community with a dedicated
              event calendar
            </td>
            <td class="[grid-area:playabl] pt-4 md:pt-0">
              <CheckCircleIcon class="h-6 w-6 text-green-600" />
            </td>
            <td class="[grid-area:chat] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
            <td class="[grid-area:reddit] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
            <td class="[grid-area:roll20] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
          </tr>
          <tr class="comparison-table-grid">
            <td class="justify-self-start [grid-area:item]">
              Easily and securely collect payment for games and memberships
            </td>
            <td class="[grid-area:playabl] pt-4 md:pt-0">
              <CheckCircleIcon class="h-6 w-6 text-green-600" />
            </td>
            <td class="[grid-area:chat] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
            <td class="[grid-area:reddit] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
            <td class="[grid-area:roll20] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
          </tr>
          <tr class="comparison-table-grid">
            <td class="justify-self-start [grid-area:item]">
              Power up your communities with integrations so you'll never miss a
              game posting or user joining
            </td>
            <td class="[grid-area:playabl] pt-4 md:pt-0">
              <CheckCircleIcon class="h-6 w-6 text-green-600" />
            </td>
            <td class="[grid-area:chat] pt-4 md:pt-0">
              <CheckCircleIcon class="h-6 w-6 text-green-600" />
            </td>
            <td class="[grid-area:reddit] pt-4 md:pt-0">
              <CheckCircleIcon class="h-6 w-6 text-green-600" />
            </td>
            <td class="[grid-area:roll20] pt-4 md:pt-0">
              <XCircleIcon class="h-6 w-6 text-red-600" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <section
    id="signup"
    class="pt-16 pb-32 grid place-items-center min-h-screen md:min-h-[75vh]"
  >
    <EmailSignup />
  </section>
  <footer class="bg-gray-100 p-12 flex justify-center gap-6">
    <a
      class="hover:underline"
      target="_blank"
      href="https://app.playabl.io/privacy"
      >Privacy policy</a
    >
    <a class="hover:underline" target="_blank" href="https://app.playabl.io/tos"
      >Terms of service</a
    >
  </footer>
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
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/vue/24/outline";
import { CalendarDaysIcon } from "@heroicons/vue/24/solid";
import { ChevronDoubleDownIcon } from "@heroicons/vue/20/solid";
import FeatureCardHeadline from "../components/FeatureCardHeadline.vue";
import PremiumFeatureCardHeadline from "../components/PremiumFeatureCardHeadline.vue";
import GhostButton from "../components/GhostButton.vue";

function goToFeatures() {
  const el = document.getElementById("features");
  el?.scrollIntoView({ behavior: "smooth" });
}
function goToComparison() {
  const el = document.getElementById("comparison");
  el?.scrollIntoView({ behavior: "smooth" });
}
function goToSignUp() {
  const el = document.getElementById("signup");
  el?.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.comparison-table-grid-headers {
  display: grid;
  grid-template-areas:
    "item item item item"
    "playabl chat reddit roll20";
  grid-template-columns: 25% 25% 25% 25%;
  @apply px-6;
}

.comparison-table-grid {
  @apply p-6 even:bg-slate-50 rounded-lg;
  display: grid;
  grid-template-areas:
    "item item item item"
    "playabl chat reddit roll20";
  grid-template-columns: 25% 25% 25% 25%;
  justify-items: center;
  align-items: center;
  @apply border border-b border-t-0 border-l-0 border-r-0 border-b-slate-50 last:border-none;
}

@media screen(md) {
  .comparison-table-grid-headers {
    display: grid;
    grid-template-areas: "item playabl chat reddit roll20";
    grid-template-columns: 34% 16% 16% 16% 16%;
    @apply px-6;
  }
  .comparison-table-grid {
    @apply p-6 even:bg-slate-50 rounded-lg;
    display: grid;
    grid-template-areas: "item playabl chat reddit roll20";
    grid-template-columns: 34% 16% 16% 16% 16%;
    justify-items: center;
    align-items: center;
    @apply border border-b border-t-0 border-l-0 border-r-0 border-b-slate-50 last:border-none;
  }
}
</style>
