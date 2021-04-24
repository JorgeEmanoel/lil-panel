<template>
  <div class="page-container not-too-white-page-container p20">
    <div class="cards">
      <h1>{{panel}}</h1>
      <div class="cards-container">
        <card
          v-for="(n, i) in cards"
          :key="n._id"
          :name="n.name"
          :url="n.url"
          :image="n.image"
          :class="{'shown': i <= currentCardIndex}"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  h1 {
    text-align: left;
    display: block;
  }

  .cards {
    min-height: 95vh;
    position: relative;
  }

  .cards-container {
    width: 80%;
  }
</style>

<script>
import Card from '../components/Card.vue';

export default {
  components: {Card},
  name: 'Cards',
  data: () => ({
    currentCardIndex: -2,
    panel: '',
    cards: [
      {
        _id: '1',
        name: 'jorgeemanoel.com',
        url: 'https://jorgeemanoel.com',
      },
      {
        _id: '2',
        name: 'jorgeemanoel.com',
        image: 'https://tecnoblog.net/wp-content/uploads/2020/08/marvels-avengers-beta_20200807161253.jpg',
        url: 'https://jorgeemanoel.com',
      },
      {
        _id: '3',
        name: 'jorgeemanoel.com',
        url: 'https://jorgeemanoel.com',
      },
      {
        _id: '4',
        name: 'jorgeemanoel.com',
        url: 'https://jorgeemanoel.com',
      },
      {
        _id: '5',
        name: 'jorgeemanoel.com',
        url: 'https://jorgeemanoel.com',
      },
    ],
  }),
  mounted() {
    this.getPanels();
    this.panel = this.$route.params.name;
  },
  methods: {
    getPanels() {
      // ...
      this.currentCardIndex = -2;
      this.animatePanels();
    },
    animatePanels() {
      if (this.currentCardIndex < this.cards.length) {
        setTimeout(this.animatePanels, 200);
      }
      this.currentCardIndex++;
    },
  },
};
</script>
