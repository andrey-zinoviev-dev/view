<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
  export default {
    name: "ListComp",
  }
</script>

<style scoped>
  ul {
    list-style: none;
    padding: 0;
  }
</style>