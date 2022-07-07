<template>
  <section className="about">
    <div className="container">
      <h2>Автор работы</h2>
      <img :src="user.avatar" alt="">
      <p>{{user.name}}, {{user.age}} лет (скоро 29)</p>
      <div>
        <h3>Обучение</h3>
        <p>Закончил {{user.education}}, сначала в 2015 году (Бакалавр), а потом в 2017 (Магистр)</p>
      </div>
      <div>
        <h3>Увлечения</h3>
        <ListComp>
          <ListElementComp v-for="(hobbie, index) in user.hobbies" :key="index">
            {{hobbie}}
          </ListElementComp>
        </ListComp>
      </div>
      <img src="">
    </div>
  </section>
</template>

<script>
  import ListComp from './ListComp.vue';
  import ListElementComp from './ListElementComp.vue';
  
  export default {
    name: 'AboutComp',
    props: {
      user: Object,
    },
    components: {
      ListComp,
      ListElementComp,
    }
  }
</script>

<style scoped>

</style>