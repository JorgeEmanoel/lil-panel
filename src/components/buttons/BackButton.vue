<template>
  <button @click="$router.go(-1)" class="back-button">
    <i class="fa fa-arrow-left"></i>
  </button>
</template>

<style scoped>
  .back-button {
    background: transparent !important;
    color: #fff;
    cursor: pointer;
    font-size: 24px;
    position: fixed;
    left: 80px;
    text-decoration: none;
    top: 80px;
    z-index: 9999;
    padding: 5px 50px;
  }
</style>

<script>
export default {
  name: 'BackButton',
};
</script>
