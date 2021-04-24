<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="f-login-username">Nome de usuário:</label>
      <input type="text" id="f-login-username" required>
    </div>
    <div class="form-group">
      <label for="f-login-password">Senha:</label>
      <input type="password" id="f-login-password" required>
    </div>
    <div class="form-group">
      <label for="f-login-password_confirmation">Confirmação de senha:</label>
      <input type="password" id="f-login-password_confirmation" required>
    </div>
    <div class="divider w-divider"></div>
    <div class="form-group">
      <button class="btn btn-success">Finalizar cadastro</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormRegister',
  data: () => ({
    username: '',
    password: '',
    passwordConfirmation: '',
    loading: true,
  }),
  methods: {
    submit() {
      this.loading = true;
      this.loading = false;
    },
  },
};
</script>
