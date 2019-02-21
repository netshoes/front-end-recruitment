<template>
  <div id="products-cart">
    <div class="container wrapper">
      <div
        class="row card-product justify-content-center"
        v-for="(product,index) in products"
        :key="index"
      >
        <div class="col-lg-2">
          <img
            class="card-product__image"
            src="https://via.placeholder.com/80x80"
            alt="Uma foto de produto"
          >
        </div>
        <div class="col-lg-4">
          <div class="d-flex flex-column">
            <span class="card-product__title">{{product.title}}</span>
            <div class="d-flex">
              <span class="card-product__sizes">{{product.availableSizes}}</span>
              <span class="card-product__style">{{product.style}}</span>
            </div>
            <span class="card-product__quantity">QUANTIDADE</span>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="d-flex flex-column align-items-center justify-content-between">
            <button class="card-product__button">X</button>
            <div class="d-flex">
              <span class="card-product__format-price">{{product.currencyFormat}}</span>
              <span class="card-product__price">{{product.price}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 total">
        <span>SUBTOTAL</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productsCart",
  computed: {
    products() {
      return this.$store.state.products;
    },
    addedToCart() {
      return this.$store.state.addedToCart;
    }
  }
};
</script>


<style lang="scss">
#products-cart {
  .wrapper {
    z-index: 1;
    background-color: rgb(32, 32, 37);
    position: absolute;
    .card-product {
      margin: 1rem 0;
      color: rgb(255, 255, 255);
      &:after {
        margin: 1rem 0;
        content: "";
        display: block;
        width: 100%;
        height: 3px;
        background-color: rgb(0, 0, 0);
      }
      &__image {
      }
      &__sizes {
      }
      &__style {
      }
      &__quantity {
      }
      &__button {
        font-size: 1.4rem;
        background: none;
        border: none;
      }
      &__format-price {
        margin-top: 1rem;
      }
      &__price {
        margin-top: 1rem;
      }
    }
  }
}
</style>
