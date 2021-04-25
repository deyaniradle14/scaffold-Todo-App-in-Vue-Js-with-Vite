<template>
  <h1 class="text-6xl font-light text-gray-800 text-center">
    {{ msg }}
  </h1>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  msg: {
    type: String,
    default: 'Custom Title',
  },
})
</script>
