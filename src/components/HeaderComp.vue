<template>
  <header class="header">
      <div class="container container_flex">        
        <img class="header__logo" src="../assets/logo.png" alt="Логотип">
        <nav>
          <ul class="header__nav-list">
            <li>
              <button>Домой</button>
            </li>
            <li>
              <button>Обо мне</button>
            </li>
          </ul>
        </nav>
      </div>
  </header>
</template>

<script> 

export default {
    name: "HeaderComp",
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