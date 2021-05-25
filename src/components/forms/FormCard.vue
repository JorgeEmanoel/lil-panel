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
import {mapGetters, mapMutations} from 'vuex';
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
  computed: {
    ...mapGetters({user: 'getUser'}),
  },
  methods: {
    ...mapMutations(['setUser']),
    async submit() {
      this.loading = true;
      const result = this.card ?
        await Card.update(this.card._id, this.data) :
        await Card.store(this.data, this.panelId);
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
        title: 'Card successfuly ' + (this.card ? 'updated' : 'created'),
        type: 'success',
      });

      this.$emit(this.card ? 'updated' : 'created');
    },
  },
};
</script>
