<template>
  <header class="header">
      <div class="container container_flex">        
        <img class="header__logo" src="../assets/logo.png" alt="Логотип">
        <nav>
          <ul class="header__nav-list">
            <li>
              <router-link to="/">Домой</router-link>
            </li>
            <li>
              <router-link :to="{name: 'About', params: { username: user.username }}">Обо мне</router-link>
            </li>
          </ul>
        </nav>
      </div>
  </header>
</template>

<script> 

export default {
    name: "HeaderComp",
    methods: {

    },
    props: {
      user: Object,
    },
}
</script>

<style scoped>
  .container_flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header__logo {
    max-width: 60px;
  }
  .header__nav-list {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    list-style: none;
    min-width: 160px;
    padding: 0;
  }

</style>