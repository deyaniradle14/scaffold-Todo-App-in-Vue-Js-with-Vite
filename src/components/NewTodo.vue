<template>
  <input
    class="text-3xl py-2 px-4 rounded-xl w-full mt-8 text-gray-800"
    type="text"
    :placeholder="placeholder"
    v-model="newTodo"
    @change="addTodo"
  />
</template>

<script setup>
import { defineProps } from 'vue'
import { newTodo, addTodo } from '../helpers/useTodos'

defineProps({
  placeholder: {
    type: String,
    default: 'New Todo',
  },
})
</script>
