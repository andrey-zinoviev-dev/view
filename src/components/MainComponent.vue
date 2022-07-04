<template>
  <section class="content">
    <h2 class="content__headline">Книги, которые я почти прочитал</h2>
    <ul class="content__headline-list">
      <li class="content__headline-list-element" v-for="(book, index) in books" :key="index">
        <h3 class="content__headline-list-element-headline">{{ book.name}}</h3>
        <img class="content__headline-list-element-img" :src="book.image" :alt="book.name">
        <button @click="showBook(book.name)">Подробнее</button>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: 'MainComponent',
    data() {
      return {
        books: [{
          id: 1,
          name: 'Акира',
          image: require('../assets/Akira.jpeg'),
        },
        {
          name: "7 Смертей Эвелины Хардкасл",
          image: require('../assets/Hardcastle.jpg')
        },
        {
          name: 'Дом из Листьев',
          image: require('../assets/House_of_leaves.jpg')
        }]
      }
    },
    props: {

    },  
    methods: {
      showBook(parameter) {
        console.log(parameter);
      }
    }
  };

</script>

<style>
  .content__headline-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding: 0;
  }
  .content__headline-list-element {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 450px;
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

