<template>
  <section class="content">
    <h2 class="content__headline">Книги, которые я почти прочитал</h2>
    <ul class="content__headline-list">
      <BookComp :books="booksList" @show-book="passBookUp"/>
    </ul>
  </section>
</template>

<script>
  import BookComp from './BookComp.vue';

  export default {
    name: 'BooksComp',
    data() {
      return {
        bookData: {},
        opendModal: false,
      }
    },
    emits: ['show-book'],
    components: {
      BookComp,
    },
    props: {
      booksList: Array,
    },  
    methods: {
      passBookUp(parameter) {
        this.bookData = parameter;
        this.opendModal = true,
        this.$emit('show-book', this.bookData, this.opendModal);
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

</style>

