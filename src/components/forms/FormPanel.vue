<template>
  <form action="#" @submit.prevent="submit">
    <div class="form-group">
      <label for="f-namespace-username">Name:</label>
      <input type="text" id="f-namespace-username" v-model="name" required>
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

<script>
import Panel from '@/services/Panel';
import {mapGetters, mapMutations} from 'vuex';
export default {
  name: 'FormPanel',
  props: {
    namespaceId: {
      required: true,
      type: String,
    },
  },
  data: () => ({
    name: '',
    loading: false,
  }),
  mounted() {
    this.name = '';

    if (this.panel) {
      this.name = this.namespace.name;
    }
  },
  computed: {
    ...mapGetters({user: 'getUser'}),
  },
  methods: {
    ...mapMutations(['setUser']),
    async submit() {
      this.loading = true;
      const result = await Panel.store(this.name, this.namespaceId);
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
      this.$notify({
        title: 'Panel successfuly created',
        type: 'success',
      });
      this.$emit('success');
    },
  },
};
</script>
