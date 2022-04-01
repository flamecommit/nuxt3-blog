<template>
  <button type="button" class="z-btn"><slot /></button>
</template>

<script setup>
</script>

<style lang="scss">
.z-btn {
  display: inline-flex;
  max-width: 100%;
  height: 40px;
  padding: 0 12px;
  border-width: 2px;
  border-style: solid;
  border-radius: 3px;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: border-color 150ms, background-color 150ms, color 150ms;

  &.c1 {
    border-color: #0d6efd;
    background-color: #0d6efd;
    color: #ffffff;

    &:not(:disabled):focus,
    &:not(:disabled):hover {
      border-color: #0b5ed7;
      background-color: #0b5ed7;
    }
  }
  &.e1 {
    border-color: #0d6efd;
    background-color: #ffffff;
    color: #0d6efd;

    &:not(:disabled):focus,
    &:not(:disabled):hover {
      border-color: #0b5ed7;
      background-color: #0b5ed7;
      color: #ffffff;
    }
  }
}
</style>
