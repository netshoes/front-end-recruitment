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
            src="https://via.placeholder.com/60x60"
            alt="Uma foto de produto"
          >
        </div>
        <div class="col-lg-8">
          <div class="d-flex flex-column">
            <span class="card-product__title">{{product.title}}</span>
            <div class="d-flex">
              <span class="card-product__sizes">{{product.availableSizes[0]}}</span>
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
      <div class="row">
        <div class="col-lg-12 total">
          <span class="total">SUBTOTAL</span>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <button class="submit">Comprar</button>
        </div>
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
      &__title {
        font-size: 1.4rem;
      }
      &__sizes {
        color: rgb(153, 153, 153);
        font-size: 1.4rem;
        &:after {
          content: "";
          display: inline-block;
          width: 2px;
          height: 10px;
          background-color: rgb(153, 153, 153);
          margin: 0 0.5rem;
        }
      }
      &__style {
        font-size: 1.4rem;
        color: rgb(153, 153, 153);
      }
      &__quantity {
        font-size: 1.4rem;
        color: rgb(153, 153, 153);
      }
      &__button {
        font-size: 1.4rem;
        background: none;
        border: none;
        &:hover {
          color: rgb(255, 255, 255);
        }
      }
      &__format-price {
        margin-top: 1.5rem;
        color: rgb(223, 189, 0);
        font-size: 1.4rem;
      }
      &__price {
        color: rgb(223, 189, 0);
        margin-top: 1.5rem;
        font-size: 1.4rem;
      }
    }
    .total {
      color: rgb(153,153,153)
    }
    .submit {
      text-transform: uppercase;
      background-color: rgb(0, 0, 0);
      border: none;
      border-radius: 0.3rem;
      color: rgb(255, 255, 255);
      width: 100%;
      padding: 2rem;
      font-size: 1.4rem;
      font-weight: 600;
    }
  }
}
</style>
