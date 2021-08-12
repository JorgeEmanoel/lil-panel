<template>
  <router-link :to="routerConfig">
    <span>{{panel.name}}</span>
    <small v-if="panel.cards.length">{{panel.cards.length}} cards</small>
    <small v-else>Empty</small>
    <i class="fa fa-arrow-right arrow"></i>
    <div class="buttons-container">
      <template v-if="!loading">
        <button @click.prevent="edit"><i class="fa fa-edit"></i></button>
        <button @click.prevent="destroy"><i class="fa fa-trash"></i></button>
      </template>
      <i class="fa fa-spin fa-spinner" v-else></i>
    </div>
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

  a .arrow {
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

  a:hover .arrow {
    opacity: 1;
    right: 20px;
  }

  a:hover .buttons-container {
    left: -45px;
    opacity: 1;
  }

  .buttons-container {
    opacity: 0;
    top: -15px;
    left: -20px;
    position: absolute;
    transition: all .3s;
  }

  .buttons-container button {
    background: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    display: block;
    margin: 10px;
    padding: 10px;
  }

  button:hover {
    box-shadow: 0 0 5px #fff;
  }
</style>

<script>
import Panel from '@/services/Panel';
import {mapMutations} from 'vuex';
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
  methods: {
    ...mapMutations(['setUser']),
    async destroy() {
      if (!confirm('Are you sure you want to delete this panel?')) {
        return false;
      }

      this.loading = true;
      const result = await Panel.delete(this.panel._id);
      this.loading = false;

      this.$notify({
        title: result.message,
        type: result.ok ? 'success' : 'error',
      });

      if (!result.ok) {
        return false;
      }

      this.setUser({namespaces: result.namespaces});
      this.$emit('deleted');
    },
    edit() {
      this.$emit('edit', {panel: this.panel});
    },
  },
};
</script>
