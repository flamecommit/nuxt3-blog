<template>
  <div class="blog-list">
    <ul>
      <li v-for="blog in blogListData" :key="blog.id">{{ blog.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import fs from "fs";

const props = defineProps(['blogListData'])

const { data, pending, error, refresh } = useAsyncData(
  'article',
  () => fs.readdirSync('articles')
)

console.log(data.value);
</script>

<style lang="scss">
</style>