<template>
  <div class="welcome">
    <h1>Welcome!</h1>
    <p>Good to see you here :D</p>
    <form-login class="white-form" @success="logged" v-if="!registerForm"/>
    <form-register class="white-form" @success="registered" v-else/>
    <div class="text-center">
      <a href="#" @click="toggleForms" v-if="!registerForm">
        Sign up
      </a>
      <a href="#" @click="toggleForms" v-else>I already have an account</a>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
    display: block;
  }

  p {
    color: #666;
    display: block;
    text-align: center;
  }

  .welcome {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 95vh;
  }

  a {
    color: #067cca;
    font-size: 14px;
  }
</style>

<script>
import FormLogin from '@/components/forms/FormLogin';
import FormRegister from '@/components/forms/FormRegister';

export default {
  name: 'Home',
  components: {
    FormLogin,
    FormRegister,
  },
  data: () => ({
    registerForm: 0,
  }),
  methods: {
    logged() {
      this.$router.push({name: 'Home'});
    },
    registered() {
      this.$router.push({name: 'Home'});
    },
    toggleForms() {
      this.registerForm = !this.registerForm;
    },
  },
};
</script>
