<template>
  <div id="products-home">
    <div class="container wrapper">
      <div class="row">
        <div
          class="col-lg-4 col-sm-6 col-sm-12 card-product"
          v-for="(product,index) in products"
          :key="index"
        >
          <a href="#">
            <img
              class="card-product__image"
              src="https://via.placeholder.com/300x400"
              alt="Uma foto de produto"
            >
          </a>
          <div class="d-flex flex-column align-self-center">
            <span class="card-product__title">
              <a href="#">{{product.title}}</a>
            </span>
            <div class="d-flex align-self-center">
              <span class="card-product__format-price">{{product.currencyFormat}}</span>
              <span class="card-product__price">{{product.price}}</span>
              <button class="card-product__button" @click="addToCart(product.id)">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productsHome",
  computed: {
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    addToCart(id) {
      this.$store.commit("addToCart", id);
    }
  }
};
</script>


<style lang="scss">
#products-home {
  .wrapper {
    .card-product {
      text-align: center;
      &__image {
        border: 2px solid rgb(255, 255, 255);
        &:hover {
          border: 2px solid rgb(223, 189, 0);
        }
      }
      &__title a {
        color: rgb(0, 0, 0);
        text-decoration: none;

        font-size: 1.4rem;
        &:hover {
          font-weight: 600;
        }
        &:after {
          margin: 1rem auto 0 auto;
          content: " ";
          width: 15px;
          height: 3px;
          display: block;
          background-color: rgb(223, 189, 0);
        }
      }
      &__format-price {
        font-size: 1.2rem;
        &:hover {
          font-weight: 600;
        }
      }
      &__price {
        font-size: 2.7rem;
        font-weight: 600;
        margin-right: 2rem;
      }
      &__button {
        text-transform: uppercase;
        color: rgb(255, 255, 255);
        background-color: rgb(32, 32, 37);
        border: none;
        margin: auto;
        border-radius: 0.2rem;
        font-size: 2.4rem;
        &:hover {
          background-color: rgb(223, 189, 0);
          color: black;
        }
      }
    }
  }
}
</style>
