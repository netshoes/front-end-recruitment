<template>
  <div id="app">
    <header>
      <div id="header">
        <div class="container-fluid header__wrapper">
          <div class="col-lg-12">
              <span class="header__wrapper--bag" @click="showCart">BAG STORE</span>
          </div>
        </div>
      </div>
    </header>
    <main>
      <div id="home">
        
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="scss">
html {
  font-size: 10px;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800");
}
</style>
