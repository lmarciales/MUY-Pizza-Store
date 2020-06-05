<template>
  <section>
    <img alt="" class="store-logo" src="../assets/Logo.png" v-if="currentRouteName" />
    <img alt="" class="store-brand" src="../assets/Pizza.png" />
  </section>
</template>

<script>
export default {
  name: 'SideBrand',
  computed: {
    currentRouteName() {
      return this.$route.name === 'Home';
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  height: 100%;
}

.store-logo {
  position: absolute;
  top: 5%;
  left: 20%;
  width: 15%;
}

.store-brand {
  margin: auto;
  width: 90%;
}
</style>
