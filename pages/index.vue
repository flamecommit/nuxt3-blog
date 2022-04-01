<template>
  <main class="page-index">
    <blog-list :blogListData="blogListData" />
  </main>
</template>

<script setup>
const blogListData = [
  {id: 1, title: 'title 1'},
  {id: 2, title: 'title 2'}
];
</script>


<style lang="scss">
.page-index {
  // padding: 50px;
}
</style>