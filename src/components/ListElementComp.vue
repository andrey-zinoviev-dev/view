<template>
  <li>
    <slot></slot>
  </li>
</template>

<script>
  export default {
    name: "ListElementComp",
    props: {
      data: Object
    }
  }
</script>