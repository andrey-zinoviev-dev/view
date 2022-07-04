<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComp from './components/FooterComp.vue';

export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComponent,
    FooterComp,
  }
}
</script>

<template>
  <HeaderComp/>
  <main>
    <div class="container">
      <section>
        <h2>Alex nutyk</h2>
        <MainComponent/>
      </section>
    </div>
  </main>
  <FooterComp/>
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
