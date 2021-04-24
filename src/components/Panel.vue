<template>
  <a :href="`/panels/${name}`">
    <span>{{name}}</span>
    <small v-if="cards">{{cards}} cartões</small>
    <small v-else>Vazio</small>
    <i class="fa fa-arrow-right"></i>
  </a>
</template>

<style scoped>
  a {
    display: block;
    padding: 20px;
    width: 100%;
    text-decoration: none;
    color: white;
    border: 1px dashed white;
    border-radius: 10px;
    margin: 10px 0;
    transition: all .5s;
    position: relative;
    opacity: 0;
  }

  a > span,
  a > small {
    display: block;
  }

  a .fa {
    position: absolute;
    right: 25px;
    top: 50%;
    margin-top: -10px;
    transition: all .3s;
    opacity: .4;
  }

  a:hover {
    border-style: solid;
  }

  a:hover .fa {
    opacity: 1;
    right: 20px;
  }
</style>

<script>
export default {
  name: 'Panel',
  props: ['name', 'cards'],
};
</script>
