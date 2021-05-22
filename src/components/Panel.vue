<template>
  <router-link :to="routerConfig">
    <span>{{panel.name}}</span>
    <small v-if="panel.cards.length">{{panel.cards.length}} cards</small>
    <small v-else>Empty</small>
    <i class="fa fa-arrow-right"></i>
  </router-link>
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
  props: {
    namespaceSlug: {
      required: true,
      type: String,
    },
    panel: {
      required: true,
      type: Object,
    },
  },
  computed: {
    routerConfig() {
      return {
        path: `/namespaces/${this.namespaceSlug}/panels/${this.panel._id}`,
      };
    },
  },
};
</script>
