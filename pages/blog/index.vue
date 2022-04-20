<template>
  <main class="page-blog-index">
    <blog-lnb />
    <div>
      {{ data }}
    </div>
  </main>
</template>

<script setup>
import fs from 'fs'

const route = useRoute()
const { query } = useRoute()
const category = ref(query.category)

const { data, refresh } = useAsyncData(
  'articleList',
  () => {
    console.log('refresh')
    const path = query.category
      ? `articles/${query.category.replace(/-/gi, "/")}`
      : "articles";
    const files = fs.readdirSync(path);
    const list = [];

    const makeList = (path, files) => {
      files.map((name) => {
        const arr = name.split(".");
        const ext = arr[arr.length - 1];
        const newPath = `${path}/${name}`;

        if (ext !== "md") {
          // directory
          const newFiles = fs.readdirSync(newPath);
          makeList(newPath, newFiles);
        } else {
          list.push({
            name,
            path: newPath
              .replace("articles/", "")
              .replace(".md", "")
              .replace(/\//gi, "-"),
          });
        }
      });
    };

    makeList(path, files);

    return list
  }
)

/*watch(() => route.query, () => {
  refreshNuxtData(['articleList'])
})*/
</script>