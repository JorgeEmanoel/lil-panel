<template>
  <button type="button">
    <div class="inner-container">
      <span><i class="fa fa-plus"></i></span>
    </div>
  </button>
</template>

<style scoped>
  button {
    display: inline-block;
    background: transparent;
    padding: 20px;
    width: 95px;
    height: 95px;
    border: 1px dashed #fff;
    border-radius: 10px;
    transition: all .5s;
    position: relative;
    overflow: hidden;
    font-size: 14px;
    z-index: 1;
    cursor: pointer;
  }

  .inner-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  button span,
  button small {
    display: block;
    word-break: break-all;
    text-shadow: 0 0 2px #000;
    font-weight: bolder;
    color: #fff;
    z-index: 999;
  }
</style>

<script>
export default {
  name: 'AddCardButton',
};
</script>
