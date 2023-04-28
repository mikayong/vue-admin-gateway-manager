<script setup>
import { mdiBridge } from "@mdi/js";
import BaseButton from "@/components/BaseButton.vue";
import SectionBanner from "@/components/SectionBanner.vue";
import { gradientBgPinkRed } from "@/colors";
</script>

<template>
  <SectionBanner :class="gradientBgPinkRed">
    <h1 class="text-3xl text-white mb-6">
      More products, contact <b>Dragino</b> ;-)
    </h1>
    <div>
      <BaseButton
        href="https://www.dragino.com"
        :icon="mdiBridge"
        label="dragino"
        target="_blank"
        rounded-full
      />
    </div>
  </SectionBanner>
</template>
