<template>
  <div class="blog-list">
    <ul>
      <li v-for="blog in blogListData" :key="blog.id">{{ blog.title }}</li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(['blogListData'])

console.log(props.blogListData);
</script>

<style lang="scss">
.blog-list {

}
</style>