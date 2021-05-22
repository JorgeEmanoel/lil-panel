<template>
  <div class="page-container black-page-container ">
    <logout-button />
    <back-button />
    <div class="cards">
      <h1>{{panel.name}}</h1>

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
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 95vh;
    position: relative;
  }

  .cards-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<script>
import BackButton from '../components/buttons/BackButton.vue';
import LogoutButton from '../components/buttons/LogoutButton.vue';
import Card from '../components/Card.vue';

export default {
  components: {Card, BackButton, LogoutButton},
  name: 'Cards',
  data: () => ({
    currentCardIndex: -2,
    panel: {
      name: 'Page under construction',
    },
    cards: [
      {
        _id: '1',
        name: 'Site Pessoal',
        url: 'https://jorgeemanoel.com',
        image: 'https://instagram.fpnz4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/122464254_1060945517679724_545166778978363576_n.jpg?tp=1&_nc_ht=instagram.fpnz4-1.fna.fbcdn.net&_nc_ohc=H9On_r52hDAAX8ZDa7_&edm=ABfd0MgBAAAA&ccb=7-4&oh=88143b7f61a67ffd5212d4ec31821231&oe=60AEE660&_nc_sid=7bff83',
      },
      {
        _id: '2',
        name: 'Google',
        image: 'http://s2.glbimg.com/z_gIOSUdsxyNGClgVLYVBHBziyw=/0x0:400x400/400x400/s.glbimg.com/po/tt2/f/original/2016/05/20/new-google-favicon-logo.png',
        url: 'https://google.com',
      },
      {
        _id: '3',
        name: 'Trello',
        image: 'https://trello.com/favicon.ico',
        url: 'https://trello.com/',
      },
      {
        _id: '4',
        name: 'Gitlab',
        image: 'https://gilab.com/favicon.ico',
        url: 'https://gilab.com/',
      },
      {
        _id: '5',
        name: 'Github',
        image: 'https://github.com/favicon.ico',
        url: 'https://github.com/',
      },
    ],
  }),
  mounted() {
    this.getPanels();
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
