<template>
  <form action="#" @submit.prevent="submit">
    <div class="form-group">
      <label for="f-namespace-username">Name:</label>
      <input type="text" id="f-namespace-username" v-model="name" required>
    </div>
    <div class="form-group">
      <label for="f-namespace-visibility">
        Make public
      </label>
      <input
        type="checkbox"
        id="f-namespace-visibility"
        v-model="isPublic"
      >
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
import {mapGetters, mapMutations} from 'vuex';
export default {
  name: 'FormNamespace',
  data: () => ({
    name: '',
    isPublic: false,
    loading: false,
  }),
  mounted() {
    this.name = '';
    this.isPublic = false;

    if (this.namespace) {
      this.name = this.namespace.name;
      this.isPublic = this.namespace.isPublic;
    }
  },
  computed: {
    ...mapGetters({user: 'getUser'}),
  },
  methods: {
    ...mapMutations(['setUser']),
    async submit() {
      this.loading = true;
      const result = await Namespace.store(
          this.name,
          this.isPublic ? 'public' : 'private',
      );
      this.loading = false;

      if (!result.ok) {
        return this.$notify({
          title: result.message,
          type: 'error',
        });
      }

      this.setUser({
        ...this.user,
        namespaces: result.namespaces,
      });
      this.$emit('success');
    },
  },
};
</script>
