<template>
  <div class="blog-lnb">
    <ul>
      <blog-lnb-item v-for="category in data" :key="category.path" :category="category" />
    </ul>
  </div>
</template>

<script setup>
import fs from "fs";

// const props = defineProps(['blogListData'])

const { data } = useAsyncData(
  'article',
  () => {
    const path = 'articles'
    const files = fs.readdirSync('articles')
    const tree = []

    const makeTree = (path, files, parent) => {
      files.map(name => {
        const arr = name.split(".")
        const ext = arr[arr.length - 1]

        if (ext !== 'md') {
          const newPath = `${path}/${name}`;
          const query = newPath.replace("articles/", "").replace(/\//gi, "-");
          const newFiles = fs.readdirSync(newPath);
          const children = [];

          parent.push({
            name,
            path: newPath,
            children,
            query,
          });

          if (newFiles.length) {
            makeTree(newPath, newFiles, children);
          }
        }
      })
    }

    makeTree(path, files, tree)

    return tree
  }
)

</script>