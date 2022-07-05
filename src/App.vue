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
        description: 'Крайне занменитая манга 82 года, считается одним из величайших анимационных и научно-фантастических произведений всех времен, так же как и важной вехой в истории японской анимации. Фильм оказал существенное влияние на популярную культуру по всему миру, расчистив путь для аниме и японской поп-культуры на Запад, а также повлияв на многие работы в индустрии анимации, комиксов, кино, музыки, телевидения и компьютерных играх',
        author: "Катсухиро Отомо",
        image: require('./assets/Akira.jpeg'),
      },
      {
        name: "7 Смертей Эвелины Хардкасл",
        description: 'Дикая смесь Агаты Кристи, Аллана По, Сайлент Хилл и Помни Нолана, детектив с переселением душ, временными аномалиями и потерей памяти главного героя, который должен решить загадку смерти Эвелины Хардкасл, иначе он может быть предан бесконечному забвению',
        author: "Стюарт Тертон",
        image: require('./assets/Hardcastle.jpg')
      },
      {
        name: 'Дом из Листьев',
        description: 'Роман ужасов о стремительно расширяющемся доме; история о силе любви; сатира на псевдонаучные спекуляции; фундаментальное исследование о фильме, которого не существует, сделанное слепым стариком; записки из лабиринтов подсознания; сентиментальное блуждание по инфернальным кругам жизни - все это в бесконечном переплетении создает единый сюжет',
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
@import url("https://fonts.googleapis.com/css2?family=Finlandica:wght@400;500;700&display=swap");
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'Finlandica', Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
body {
  margin: 0;
}
button {
  font-family: 'Finlandica', Arial, Helvetica, sans-serif;
}
.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
