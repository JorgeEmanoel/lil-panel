<template>
  <form action="#" @submit.prevent="submit">
    <div class="form-group">
      <label for="f-card-username">Name:</label>
      <input
        type="text"
        id="f-card-username"
        v-model="data.name"
        required
        autofocus
      >
    </div>
    <div class="form-group">
      <label for="f-card-url">URL:</label>
      <input type="url" id="f-card-url" v-model="data.url" required>
    </div>
    <div class="form-group">
      <label for="f-card-background-url">Background URL:</label>
      <input
        type="url"
        id="f-card-background-url"
        v-model="data.backgroundUrl"
      >
    </div>
    <div class="form-group">
      <label for="f-card-background-color">Background Color:</label>
      <input
        type="color"
        id="f-card-background-color"
        v-model="data.backgroundColor"
      >
    </div>
    <div class="form-group">
      <label for="f-card-text-color">Text Color:</label>
      <input
        type="color"
        id="f-card-text-color"
        v-model="data.textColor"
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

<script>
import Card from '@/services/Card';
import {mapMutations} from 'vuex';
export default {
  name: 'FormCard',
  props: {
    panelId: {
      required: true,
      type: String,
    },
    card: {
      required: false,
      type: Object,
    },
  },
  data: () => ({
    data: {
      name: '',
      url: '',
      backgroundColor: '#ffffff',
      textColor: '#333333',
      backgroundUrl: '',
    },
    loading: false,
  }),
  mounted() {
    this.data = {
      name: '',
      url: '',
      backgroundColor: '#ffffff',
      textColor: '#333333',
      backgroundUrl: '',
    };

    if (this.card) {
      this.data = this.card;
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    async submit() {
      this.loading = true;
      const result = this.card ?
        await Card.update(this.card._id, this.data) :
        await Card.store(this.data, this.panelId);
      this.loading = false;

      this.$notify({
        title: result.message,
        type: result.ok ? 'success' : 'error',
      });

      if (!result.ok) {
        return false;
      }

      this.setUser({namespaces: result.namespaces});
      this.$emit(this.card ? 'updated' : 'created');
    },
  },
};
</script>
