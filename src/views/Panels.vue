<template>
  <div class="page-container not-too-black-page-container">
    <div class="panels">
      <h1>Panels <br> {{namespace}}</h1>
      <div class="panels-container">
        <panel
          v-for="(n, i) in panels"
          :key="n._id"
          :name="n.name"
          :cards="n.cards"
          :class="{'shown': i <= currentPanelIndex}"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    text-align: center;
    display: block;
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

export default {
  components: {Panel},
  name: 'Panels',
  data: () => ({
    currentPanelIndex: -2,
    namespace: '',
    panels: [
      {
        _id: '1',
        name: 'jorgeemanoel.com',
        cards: 0,
      },
      {
        _id: '2',
        name: 'jorgeemanoel.com',
        cards: 0,
      },
      {
        _id: '3',
        name: 'jorgeemanoel.com',
        cards: 0,
      },
      {
        _id: '4',
        name: 'jorgeemanoel.com',
        cards: 0,
      },
      {
        _id: '5',
        name: 'jorgeemanoel.com',
        cards: 0,
      },
    ],
  }),
  mounted() {
    this.getPanels();
    this.namespace = this.$route.params.name;
  },
  methods: {
    getPanels() {
      // ...
      this.currentPanelIndex = -2;
      this.animatePanels();
    },
    animatePanels() {
      if (this.currentPanelIndex < this.panels.length) {
        setTimeout(this.animatePanels, 200);
      }
      this.currentPanelIndex++;
    },
  },
};
</script>
