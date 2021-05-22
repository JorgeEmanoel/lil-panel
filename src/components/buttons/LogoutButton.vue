<template>
  <button type="button" id="logout-button" @click="logout">
    <i class="fa fa-sign-out-alt"></i>
  </button>
</template>

<style scoped>
  #logout-button {
    background: transparent !important;
    color: #fff;
    cursor: pointer;
    font-size: 42px;
    position: fixed;
    right: 80px;
    text-decoration: none;
    top: 80px;
    z-index: 9999;
  }
</style>

<script>
import {mapMutations} from 'vuex';
export default {
  name: 'LogoutButton',
  methods: {
    ...mapMutations(['setUser']),
    logout() {
      if (!confirm('Are you sure you want to logout?')) {
        return false;
      }

      this.setUser(null);
      this.$router.push({path: '/'});
    },
  },
};
</script>
