<template>
  <div class="page-container not-too-black-page-container">
    <logout-button />
    <back-button routeName="Home" />
    <div class="panels">
      <h1 v-if="!adding">
        <template v-if="namespace">
          {{namespace.name}}
          <button class="btn add-resource" @click="toggleAdding">
            <i class="fa fa-plus"></i>
          </button>
        </template>
      </h1>
      <form-panel
        v-if="adding && namespace"
        :namespaceId="namespace._id"
        @success="onPanelAdded"
      >
        <button class="btn btn-success" @click="toggleAdding">
          Cancel
        </button>
      </form-panel>
      <div v-if="loading">
        <i class="fa fa-spin fa-spinner fa-2x"></i>
      </div>
      <div class="panels-container" v-if="!loading && !adding">
        <template v-if="namespace">
          <panel
            v-for="(p, i) in namespace.panels"
            :key="p._id"
            :panel="p"
            :namespaceSlug="namespace.slug"
            :class="{'shown': i <= currentPanelIndex}"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
    display: block;
    position: relative;
  }

  .panels {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 95vh;
    position: relative;
  }

  .panels-container {
    width: 25%;
  }
</style>

<script>
import Panel from '../components/Panel.vue';
import Namespace from '@/services/Namespace';
import FormPanel from '@/components/forms/FormPanel';
import BackButton from '@/components/buttons/BackButton';
import LogoutButton from '@/components/buttons/LogoutButton';

export default {
  components: {Panel, FormPanel, BackButton, LogoutButton},
  name: 'Panels',
  data: () => ({
    currentPanelIndex: -2,
    namespace: null,
    loading: false,
    adding: false,
  }),
  mounted() {
    this.getNamespace();
  },
  methods: {
    toggleAdding() {
      this.adding = !this.adding;
    },
    async getNamespace() {
      this.loading = true;
      const result = await Namespace.bySlug(this.$route.params.slug);
      this.loading = false;

      if (!result.ok) {
        return this.$notify({
          title: result.message,
          type: 'error',
        });
      }

      this.namespace = result.namespace;
      this.currentPanelIndex = -2;
      this.animatePanels();
    },
    animatePanels() {
      if (this.currentPanelIndex < this.namespace.panels.length) {
        setTimeout(this.animatePanels, 200);
      }
      this.currentPanelIndex++;
    },
    onPanelAdded() {
      this.adding = false;
      this.getNamespace();
    },
  },
};
</script>
