import { createRouter, createWebHistory } from 'vue-router';
// import HomeView from './views/HomeView.vue';
import BooksComp from './components/BooksComp.vue'
import AboutComp from './components/AboutComp.vue';

const routes = [
  { path: '/',
    name: 'Home',
    component: BooksComp,
    props: true,
    // {
      // booksList: [
      //   {
      //     id: 1,
      //     name: 'Акира',
      //     description: 'Крайне занменитая манга 82 года, считается одним из величайших анимационных и научно-фантастических произведений всех времен, так же как и важной вехой в истории японской анимации. Фильм оказал существенное влияние на популярную культуру по всему миру, расчистив путь для аниме и японской поп-культуры на Запад, а также повлияв на многие работы в индустрии анимации, комиксов, кино, музыки, телевидения и компьютерных играх',
      //     author: "Катсухиро Отомо",
      //     image: require('./assets/Akira.jpeg'),
      //   },
      //   {
      //     name: "7 Смертей Эвелины Хардкасл",
      //     description: 'Дикая смесь Агаты Кристи, Аллана По, Сайлент Хилл и Помни Нолана, детектив с переселением душ, временными аномалиями и потерей памяти главного героя, который должен решить загадку смерти Эвелины Хардкасл, иначе он может быть предан бесконечному забвению',
      //     author: "Стюарт Тертон",
      //     image: require('./assets/Hardcastle.jpg')
      //   },
      //   {
      //     name: 'Дом из Листьев',
      //     description: 'Роман ужасов о стремительно расширяющемся доме; история о силе любви; сатира на псевдонаучные спекуляции; фундаментальное исследование о фильме, которого не существует, сделанное слепым стариком; записки из лабиринтов подсознания; сентиментальное блуждание по инфернальным кругам жизни - все это в бесконечном переплетении создает единый сюжет',
      //     author: "Mark Z. Danielewski",
      //     image: require('./assets/House_of_leaves.jpg')
      //   }
      // ]
    // }
  },
  { path: '/about/:username',
    name: 'About',
    component: AboutComp,
    props: true,
    //  {
      // user: {
      //   name: "Андрей Зиновьев",
      //   username:"vanSchlanger",
      //   age: 29,
      //   education: 'РЭУ им. Г.В Плеханова',
      //   courses: 'Yandex Praktikum',
      //   hobbies: ["японский", "озвучка", "тренажерный зал", "ночная работа", "аним- стоп, нет"],
      //   avatar: require('./assets/me.jpg'),
      // },
    // }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;