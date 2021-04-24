<template>
  <div class="page-container black-page-container">
    <div class="home">
      <h1>Namespaces</h1>
      <div class="namespaces-container">
        <namespace
          v-for="(n, i) in namespaces"
          :key="n._id"
          :name="n.name"
          :panels="n.panels"
          :class="{'shown': i <= currentNamespaceIndex}"
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

  .home {
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 95vh;
    position: relative;
  }

  .namespaces-container {
    width: 25%;
  }
</style>

<script>
import Namespace from '../components/Namespace.vue';

export default {
  components: {Namespace},
  name: 'Home',
  data: () => ({
    currentNamespaceIndex: -2,
    namespaces: [
      {
        _id: '1',
        name: 'jorgeemanoel.com',
        panels: 0,
      },
      {
        _id: '2',
        name: 'jorgeemanoel.com',
        panels: 0,
      },
      {
        _id: '3',
        name: 'jorgeemanoel.com',
        panels: 0,
      },
      {
        _id: '4',
        name: 'jorgeemanoel.com',
        panels: 0,
      },
      {
        _id: '5',
        name: 'jorgeemanoel.com',
        panels: 0,
      },
    ],
  }),
  mounted() {
    this.getNamespaces();
  },
  methods: {
    getNamespaces() {
      // ...
      this.currentNamespaceIndex = -2;
      this.animateNamespaces();
    },
    animateNamespaces() {
      if (this.currentNamespaceIndex < this.namespaces.length) {
        setTimeout(this.animateNamespaces, 200);
      }
      this.currentNamespaceIndex++;
    },
  },
};
</script>
