<template>
  <form class="login-form col-12 col-xl-10 ">
    <img alt="" class="login-logo" src="../assets/Login-Best-Pizza.png" />
    <h1>Bienvenido</h1>
    <h3>A las mejores pizzas del país</h3>
    <span class="error-message" v-show="errorMessage">{{ errorMessage }}</span>
    <div class="input-field">
      <input placeholder="Usuario" type="text" v-model="input.username" />
      <img alt="" src="../assets/ic_usuario.png" />
    </div>
    <div class="input-field">
      <input autocomplete="off" placeholder="Contraseña" type="password" v-model="input.password" />
      <img alt="" src="../assets/ic_contrase§a.png" />
    </div>
    <strong class="lost-password">¿Olvidaste tu contraseña?</strong>
    <button @click="doLogin()" type="button">Iniciar sesión</button>
  </form>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      input: {
        username: '',
        password: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    doLogin() {
      this.axios.get().then((res) => {
        const users = res.data.response.users;
        if (this.input.username !== '' && this.input.password !== '') {
          const findUser = users.find((user) => user.email === this.input.username && user.password === this.input.password);
          if (findUser) {
            localStorage.setItem('LoggedUser', findUser);
            this.$router.push('/home');
          } else {
            this.errorMessage = 'Usuario o contraseña incorrecta';
          }
        } else {
          this.errorMessage = 'Debe llenar los campos de usuario y contraseña para ingresar';
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  .login-logo {
    margin: 40px 0;
    width: 30%;
  }

  h3 {
    color: #8f8f8f;
    font-weight: 400;
    margin-bottom: 40px;
  }

  .error-message {
    color: red;
    margin: 10px;
  }

  .input-field {
    text-align: center;
    width: 80%;
    margin-bottom: 10px;
    position: relative;

    input {
      height: 80px;
      width: 80%;
      border: 1px solid #8f8f8f;
      border-radius: 3px;
      outline: none;
      padding-left: 20px;
      color: #8f8f8f;
      font-size: 18px;
    }

    img {
      position: absolute;
      top: 25%;
      right: 13%;
    }
  }

  .lost-password {
    font-size: 20px;
    margin: 30px 0;
  }

  button {
    margin: 30px 0;
    font-weight: bold;
    font-size: 20px;
    width: 65%;
    height: 80px;
    background: #ffc857;
    border: none;
    border-radius: 3px;
    -webkit-box-shadow: 0 2px 5px 1px rgba(140, 207, 166, 1);
    -moz-box-shadow: 0 2px 5px 1px rgba(140, 207, 166, 1);
    box-shadow: 0 2px 5px 1px rgba(140, 207, 166, 1);
  }
}
</style>
