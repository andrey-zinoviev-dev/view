<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComp from './components/FooterComp.vue';
import PopupComp from './components/PopupComp.vue';

export default {
  name: 'App',
  data() {
    return {
      books: [],
      selectedBook: {},
      openPopupBook: false,
    }
  },
  methods: {
    passBook(parameter, boolean) {
      this.selectedBook = parameter;
      this.openPopupBook = boolean;
    },
    closePopupWindow(value) {
      this.openPopupBook = value;
    }
  },
  components: {
    HeaderComp,
    MainComponent,
    FooterComp,
    PopupComp,
  },
  //здесь этап создания компонента, поэтому тут можно делать запросы к api, например, но для наглядности здесь будет массив книг
  created() {
    this.books = [
      {
        id: 1,
        name: 'Акира',
        author: "Катсухиро Отомо",
        image: require('./assets/Akira.jpeg'),
      },
      {
        name: "7 Смертей Эвелины Хардкасл",
        author: "Стюарт Тертон",
        image: require('./assets/Hardcastle.jpg')
      },
      {
        name: 'Дом из Листьев',
        author: "Mark Z. Danielewski",
        image: require('./assets/House_of_leaves.jpg')
      }
    ];
  }
}
</script>

<template>
  <HeaderComp/>
  <main>
    <div class="container">
      <section>
        <h2>Alex nutyk</h2>
        <MainComponent :booksList="books" @show-book="passBook"/>
      </section>
    </div>
  </main>
  <FooterComp/>
  <PopupComp :book="this.selectedBook" v-show="this.openPopupBook" @close-popup="closePopupWindow"/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
