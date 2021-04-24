<template>
  <a
    :href="`url`"
    target="_blank"
    :class="className"
    :style="image && `background-image: url(${image})`"
  >
    <div class="inner-container">
      <span>{{name}}</span>
      <div class="backdrop" v-if="image"></div>
    </div>
  </a>
</template>

<style scoped>
  a {
    display: inline-block;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 20px;
    width: 60px;
    height: 60px;
    text-decoration: none;
    border: 1px dashed #333;
    border-radius: 10px;
    margin: 10px;
    transition: all .5s;
    position: relative;
    opacity: 0;
    overflow: hidden;
    font-size: 14px;
    z-index: 1;
  }

  a.text-black span {
    color: #333;
    text-shadow: none;
  }

  a .backdrop {
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, .6);
    z-index: -1;
  }

  .inner-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  a:first-child {
    margin-left: 0;
  }

  a span,
  a small {
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
  name: 'Card',
  props: ['name', 'url', 'image'],
  computed: {
    className() {
      return {
        'text-black': !this.image,
      };
    },
  },
};
</script>
