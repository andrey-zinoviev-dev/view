<template>
  <section>
    <div class="container">
      <button @click="closePopup">X</button>
      <h2>Подробнее о книге</h2>
      <h3>{{book.name}}</h3>
    </div>
    <div class="filter"></div>
  </section>
</template>

<script>
  export default {
    name: "PopupComp",
    props: {
      book : Object,
    },
    methods: {
      closePopup(){
        this.$emit('close-popup', false);
      }
    }
  }
</script>

<style scoped>
  section {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 10% 0 0 0;
  }
  button {
    cursor: pointer;
  }
  .container {
    position: relative;
    z-index: 10;
    color: white;
  }
  .filter {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>