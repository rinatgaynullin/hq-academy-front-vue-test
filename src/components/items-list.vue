<template>
  <ul>
    // TODO v-for
    <li v-for="item in listItems" :key="item.id">
      <div>
        <div>{{item.title}}</div>
        <div v-for="teacher in item.teachers" :key="teacher.id">
          {{teacher.name}}
        </div>
      </div>
    </li>
  </ul>
</template>

<script setup>
import {defineProps} from 'vue'
defineProps({
  listItems: {
    type: Array,
    required: true
  }
})
</script>
