# README

## Nore version

17.0.0

## Directory

특별한 경우를 제외하면 Nuxt3에서 제공하는 Directory 외 Custom Directory 는 생성/사용하지 않는다.

## CSS

CSS문법은 SCSS로 통일한다.

## Pages Class

`pages/` Directory 내 Component Class는 접두어 `page-`를 붙여 작명한다.

```
// pages/index.vue

<template>
  <div class="page-index"></div>
</template>

// pages/community/list.vue

<template>
  <div class="page-community-list"></div>
</template>
```

## Layouts Class

`layouts/` Diretory 내 Component Class는 접두어 `layout-`을 붙여 작명한다.

```
// layouts/default.vue

<template>
  <div class="layout-default">
    <slot />
  </div>
</template>
```

## Components Class

`components/` Directory 내 Component Class는 경로와 파일명을 기준으로 작명하고, 해당 Directory 1depth에는 `pages`와 `layouts`라는 Directory 및 File명을 금지한다.

```
// board/detail.vue

<template>
  <div class="board-detail"></div>
</template>
```