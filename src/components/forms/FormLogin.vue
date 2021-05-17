<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label for="f-login-username">Username:</label>
      <input type="text" id="f-login-username" v-model="username" required>
    </div>
    <div class="form-group">
      <label for="f-login-password">Password:</label>
      <input type="password" id="f-login-password" v-model="password" required>
    </div>
    <div class="divider"></div>
    <div class="form-group">
      <button class="btn btn-success">Login</button>
    </div>
  </form>
</template>

<script>
import Auth from '@/services/Auth';
import {mapMutations} from 'vuex';
export default {
  name: 'FormLogin',
  data: () => ({
    username: '',
    password: '',
    loading: true,
  }),
  methods: {
    ...mapMutations(['setUser']),
    async submit() {
      this.loading = true;
      const result = await Auth.login(this.username, this.password);
      this.loading = false;
      if (!result.ok) {
        return this.$notify({
          title: result.message,
          type: 'error',
        });
      }

      this.setUser(result.user);
      this.$emit('success', {user: result.user});
    },
  },
};
</script>
