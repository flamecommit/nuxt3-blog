<template>
  <li class="blog-lnb-item">
    <nuxt-link :to="{query: {category: category.query}}">{{ category.name }}</nuxt-link>
    <ul v-if="category.children.length">
      <blog-lnb-item v-for="category in category.children" :key="category.path" :category="category" />
    </ul>
  </li>
</template>

<script setup>
const { category } = defineProps(['category'])
</script>