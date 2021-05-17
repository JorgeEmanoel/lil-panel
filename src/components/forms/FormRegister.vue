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
    <div class="form-group">
      <label for="f-login-password_confirmation">Confirmação de senha:</label>
      <input
        type="password"
        id="f-login-password_confirmation"
        v-model="passwordConfirmation"
        required
      />
    </div>
    <div class="divider w-divider"></div>
    <div class="form-group">
      <button class="btn btn-success" :disabled="loading">
        Finalizar cadastro
        <i class="fa fa-spin fa-spinner" v-if="loading"></i>
      </button>
    </div>
  </form>
</template>

<script>
import Auth from '@/services/Auth';
export default {
  name: 'FormRegister',
  data: () => ({
    username: '',
    password: '',
    passwordConfirmation: '',
    loading: false,
  }),
  methods: {
    async submit() {
      this.loading = true;
      const result = await Auth.register(
          this.username,
          this.password,
          this.passwordConfirmation,
      );
      this.loading = false;

      if (!result.ok) {
        return this.$notify({
          title: result.message,
          type: 'error',
        });
      }
    },
  },
};
</script>
