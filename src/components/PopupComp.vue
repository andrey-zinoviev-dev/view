<template>
  <section>
    <div class="container">
      <button class="popup__close-btn" @click="closePopup">X</button>
      <h2>Подробнее о книге</h2>
      <div class="book">
        <div class="book__text">
          <h3>{{book.name}}</h3>
          <p>{{book.description}}</p>
          <p>Автор: {{book.author}}</p>
        </div>
        <img :src="book.image" alt="">
      </div>
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
  .popup__close-btn {
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
  }
  .container {
    position: relative;
    z-index: 10;
    color: white;
  }
  .book {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    min-width: 900px;
  }
  .book__text {
    max-width: 360px;
    text-align: left;
    line-height: 1.5;

  }
  img {
    max-width: 420px;
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