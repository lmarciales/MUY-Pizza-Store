<template>
  <footer>
    <div class="network-links">
      <i @click="redirectTo('https://www.facebook.com/MUYRestauranteCol/')" class="fab fa-facebook-square"></i>
      <i @click="redirectTo('https://www.instagram.com/muyrestaurantecol/')" class="fab fa-instagram"></i>
    </div>
    <router-link to="/">
      <img alt="" src="../../assets/Best_Pizza.png" />
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'HomeFooter',
  methods: {
    redirectTo(url) {
      window.open(url, '_blank');
    }
  }
};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  height: 100px;
  width: 100%;
  background: black;
  color: white;
  padding: 0 10% 10px;

  .network-links {
    font-size: 35px;

    i {
      margin-right: 20px;
      cursor: pointer;
    }
  }

  img {
    height: 50px;
    cursor: pointer;
  }
}
</style>
