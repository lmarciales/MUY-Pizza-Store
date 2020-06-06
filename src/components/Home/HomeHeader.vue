<template>
  <div class="header">
    <div @click="doLogout" class="logout">
      <img alt="" src="../../assets/ic_contrase§a.png" />
      <span>Salir</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  methods: {
    doLogout() {
      localStorage.removeItem('LoggedUser');
      this.$router.go();
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100px;

  .logout {
    display: flex;
    align-items: flex-end;
    margin-right: 10%;
    cursor: pointer;

    span {
      font-size: 20px;
      color: #8f8f8f;
      font-weight: bold;
    }
  }
}
</style>
