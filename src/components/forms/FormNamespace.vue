<template>
  <form action="#" @submit.prevent="submit">
    <div class="form-group">
      <label for="f-namespace-username">Name:</label>
      <input type="text" id="f-namespace-username" v-model="data.name" required>
    </div>
    <div class="divider"></div>
    <div class="form-group">
      <button class="btn btn-success" :disabled="loading">
        Save
        <i class="fa fa-spin fa-spinner" v-if="loading"></i>
      </button>
    </div>
    <div class="form-group">
      <slot />
    </div>
  </form>
</template>

<style>
  #f-namespace-visibility {
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
</style>

<script>
import Namespace from '@/services/Namespace';
import {mapMutations} from 'vuex';
export default {
  name: 'FormNamespace',
  props: {
    namespace: {
      type: Object,
      required: false,
    },
  },
  data: () => ({
    data: {
      name: '',
      isPublic: false,
    },
    loading: false,
  }),
  mounted() {
    this.data = {
      name: '',
      loading: false,
    };

    if (this.namespace) {
      this.data = this.namespace;
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    async submit() {
      this.loading = true;
      const result = this.namespace ?
        await Namespace.update(this.namespace._id, this.data.name) :
        await Namespace.store(this.data.name);
      this.loading = false;

      this.$notify({
        title: result.message,
        type: result.ok ? 'success' : 'error',
      });

      if (!result.ok) {
        return false;
      }

      this.setUser({
        namespaces: result.namespaces,
      });
      this.$emit('success');
    },
  },
};
</script>
