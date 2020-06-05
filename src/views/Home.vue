<template>
  <section class="home-layout">
    <home-header></home-header>
    <section class="main-home col-12 col-xl-10">
      <span class="home-title">Pizzerías</span>
      <div class="home-pizza-bar">
        <h1>Tiendas</h1>
        <div class="search-field">
          <i class="fas fa-search"></i>
          <input placeholder="Busca tu pizzería" type="text" v-model="searchInput" />
        </div>
      </div>
      <span class="choose-store">Escoge tu pizzería favorita</span>
      <div class="store-list">
        <div :key="store.id" class="pizza-store" v-for="store in storesFiltered">
          <img :src="getImgUrl(store.img)" alt="" />
          <span class="store-title">{{ store.name }}</span>
          <span class="store-address">{{ store.address }}</span>
        </div>
      </div>
    </section>
    <home-footer></home-footer>
  </section>
</template>

<script>
import HomeFooter from '@/components/Home/HomeFooter';
import HomeHeader from '@/components/Home/HomeHeader';

export default {
  name: 'Home',
  components: { HomeFooter, HomeHeader },
  data() {
    return {
      searchInput: '',
      stores: [],
      imgStore: [
        {
          id: 1,
          asset: 'Panos_pizza.png'
        },
        {
          id: 2,
          asset: 'pizzeria_camion.png'
        },
        {
          id: 3,
          asset: 'Sbarro.png'
        },
        {
          id: 4,
          asset: 'stroller_pizza.png'
        },
        {
          id: 5,
          asset: 'trulli.png'
        },
        {
          id: 6,
          asset: 'voglia_di_pizza.png'
        }
      ]
    };
  },
  mounted() {
    this.axios.get().then((res) => {
      this.stores = res.data.response.stores;
      this.stores.map((store) => {
        const tempStore = this.imgStore.find((img) => img.id === store.id);
        store.img = tempStore.asset;
      });
    });
  },
  methods: {
    getImgUrl(img) {
      return require('../assets/' + img);
    }
  },
  computed: {
    storesFiltered() {
      return this.stores.filter((store) => {
        return store.name.toLowerCase().includes(this.searchInput.toLowerCase());
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.home-layout {
  height: 100%;

  .main-home {
    padding: 10px 50px;
    margin-bottom: 100px;

    .home-title {
      color: #8f8f8f;
      font-size: 24px;
      padding: 0 10px;

      &:after {
        content: ' ';
        display: block;
        border-bottom: 4px solid #ffc857;
        width: 110px;
      }
    }

    .home-pizza-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media only screen and (max-width: 768px) {
        display: block;
      }

      .search-field {
        position: relative;
        color: #8f8f8f;

        i {
          position: absolute;
          top: 25%;
          left: 3%;
        }

        input {
          border: 1px solid #8f8f8f;
          border-radius: 30px;
          padding-left: 25px;
          outline: none;
        }
      }
    }

    .choose-store {
      color: #8f8f8f;
      font-size: 24px;
    }

    .store-list {
      display: grid;
      grid-gap: 10px;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      margin: 30px 0;

      .pizza-store {
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;
        cursor: pointer;
        width: min-content;

        img {
          width: 200px;
          height: 200px;
          margin-bottom: 10px;

          &:hover {
            -webkit-animation: rotate-center 0.6s ease-in-out both;
            animation: rotate-center 0.6s ease-in-out both;
          }
        }

        .store-title {
          font-size: 20px;
          font-weight: bold;
        }
      }
    }

    @-webkit-keyframes rotate-center {
      0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes rotate-center {
      0% {
        -webkit-transform: rotate(0);
        transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
}
</style>
