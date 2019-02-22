<template>
  <div id="app">
    <header>
      <!-- Cabeçalho -->
      <div id="header">
        <div class="container wrapper">
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-12">
              <span class="wrapper--bag" @click="showCart = !showCart">
                <font-awesome-icon :icon="['fas', 'shopping-bag']" class="fa-lg"/>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- FIM do Cabeçalho -->
      <!-- Carrinho escondido -->
      <div id="cart" v-if="!showCart">
        <div class="container wrapper">
          <div class="row justify-content-end">
            <div class="col-lg-8 col-md-12 col-sm-12 col-12">
              <productsCart/>
            </div>
          </div>
        </div>
      </div>
      <!-- FIM do Carrinho escondido -->
    </header>
    <main>
      <!-- Produtos -->
      <productsHome/>
    </main>
  </div>
  <!-- FIM dos produtos -->
</template>

<script>
import productsHome from "@/components/productsHome.vue";
import productsCart from "@/components/productsCart.vue";
export default {
  name: "app",
  components: {
    productsHome,
    productsCart
  },
  data() {
    return {
      showCart: true
    };
  }
};
</script>

<style lang="scss">
html {
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800");
  font-family: "Open Sans", sans-serif;
  font-size: 10px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#header {
  .wrapper {
    &--bag {
      font-size: 2rem;
      &:hover {
        color: rgb(223, 189, 0);
      }
    }
  }
}
</style>
