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

<script>
import Panel from '@/services/Panel';
import {mapMutations} from 'vuex';
export default {
  name: 'FormPanel',
  props: {
    namespaceId: {
      required: true,
      type: String,
    },
    panel: {
      required: false,
      type: String,
    },
  },
  data: () => ({
    data: {
      name: '',
    },
    loading: false,
  }),
  mounted() {
    this.data = {
      name: '',
    };

    if (this.panel) {
      this.data = this.panel;
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    async submit() {
      this.loading = true;
      const result = this.panel ?
        await Panel.update(this.panel._id, this.data.name) :
        await Panel.store(this.data.name, this.namespaceId);

      this.loading = false;

      this.$notify({
        title: result.message,
        type: result.ok ? 'success' : 'error',
      });

      if (!result.ok) {
        return false;
      }

      this.setUser({namespaces: result.namespaces});
      this.$emit('success');
    },
  },
};
</script>
