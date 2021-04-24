<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="f-login-username">Nome de usuário:</label>
      <input type="text" id="f-login-username" v-model="username" required>
    </div>
    <div class="form-group">
      <label for="f-login-password">Senha:</label>
      <input type="password" id="f-login-password" v-model="password" required>
    </div>
    <div class="divider"></div>
    <div class="form-group">
      <button class="btn btn-success">Entrar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormLogin',
  data: () => ({
    username: '',
    password: '',
    loading: true,
  }),
  methods: {
    submit() {
      this.loading = true;
      this.loading = false;
      this.$router.push({name: 'Home'});
    },
  },
};
</script>
