<template>
  <section class="content">
    <h2 class="content__headline">Книги, которые я почти прочитал</h2>
    <ul class="content__headline-list">
      <!-- <li v-for="(book, index) in books" :key="index">
        {{book}}
      </li> -->
      <BookComp :books="books" @show-book="passBookUp"/>
    </ul>
  </section>
</template>

<script>
  import BookComp from '@/components/BookComp.vue'
  export default {
    name: "HomeView",
    components: {
      BookComp,
    },
    methods: {
      passBookUp(parameter) {
        
        this.bookData = parameter;
        this.opendModal = true,
        this.$emit('show-book', this.bookData, this.opendModal);
      }
    },
    // data() {
    //   return {
    //     booksList: 
    //   }
    // },
    props: {
      books: Array,
    },
    created() {
      // console.log(books)
    }
  }
</script>