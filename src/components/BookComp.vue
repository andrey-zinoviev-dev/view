<template>
  <!-- <li class="content__headline-list-element" v-for="(book, index) in books" :key="index">
    <h3 class="content__headline-list-element-headline">{{book.name}}</h3>
    <img class="content__headline-list-element-img" :src="book.image" alt="">
    <button @click="showBook(book)">Подробнее</button>
  </li> -->
  <ListElementComp v-for="(book, index) in books" :key="index" class="content__headline-list-element">
    <h3 class="content__headline-list-element-headline">{{book.name}}</h3>
    <img class="content__headline-list-element-img" :src="book.image" alt="">
    <button @click="showBook(book)">Подробнее</button>
  </ListElementComp>
</template>

<script>
  import ListElementComp from './ListElementComp.vue';
  export default {
    name: "BookComp",
    props: {
      title: String,
      books: Array,
    },
    components: {
      ListElementComp,
    },
    emits: ['show-book'],
    methods: {
      showBook(bookData) {
        this.$emit('show-book', bookData, true);
      }
    }
  }
</script>

<style>
  .content__headline-list-element {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 450px;
    min-width: 280px;
  }
  .content__headline-list-element-headline {
    margin: 0;
  }
  .content__headline-list-element-img {
    max-width: 230px;
    min-height: 340px;
    object-fit: cover;
  }
</style>