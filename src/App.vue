<template>
  <ItemsList :list-items="listItems"/>
</template>

<script setup>
import ItemsList from './components/items-list.vue'
import {httpApi} from "@/api/api";
import {ref} from "vue";

//Спи
const listItems = ref([]);

const teachers = ref([]);
const products = ref([]);
  const fetchTeachers =  () => {
    // Получить данные учителя из апи
  }

  const fetchProducts =  () => {
    // Получить данные продуктов из апи
  }
</script>


