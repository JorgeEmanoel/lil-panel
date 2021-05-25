<template>
  <div class="page-container black-page-container ">
    <logout-button />
    <back-button />
    <div class="cards">
      <h1 v-if="panel">{{panel.name}}</h1>

      <i class="fa fa-loading fa-2x" v-if="loading"></i>
      <div class="cards-container" v-if="!loading && panel && !adding">
        <card
          v-for="(c, i) in panel.cards"
          :key="c._id"
          :card="c"
          :class="{'shown': i <= currentCardIndex}"
          @deleted="getPanel"
          @edit="onEdit"
        />
        <add-card-button @click.native="toggleAdding" />
      </div>
      <form-card
        v-if="adding && panel"
        :panelId="panel._id"
        :card="currentCard"
        @created="onCardCreated"
        @updated="onCardUpdated"
      >
        <button class="btn btn-success" @click="toggleAdding">
          Cancel
        </button>
      </form-card>
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
import AddCardButton from '../components/buttons/AddCardButton.vue';
import Card from '../components/Card.vue';
import FormCard from '../components/forms/FormCard.vue';
import Panel from '@/services/Panel';

export default {
  components: {Card, BackButton, LogoutButton, FormCard, AddCardButton},
  name: 'Cards',
  data: () => ({
    currentCardIndex: -2,
    panel: null,
    currentCard: null,
    loading: false,
    adding: false,
  }),
  mounted() {
    this.getPanel();
  },
  methods: {
    async getPanel() {
      this.loading = true;
      const result = await Panel.find(this.$route.params.panelId);
      this.loading = false;

      if (!result.ok) {
        return this.$notify({
          title: result.message,
          type: 'error',
        });
      }

      this.panel = result.panel;

      this.currentCardIndex = -2;
      this.animateCards();
    },
    animateCards() {
      if (this.currentCardIndex < this.panel.cards.length) {
        setTimeout(this.animateCards, 200);
      }
      this.currentCardIndex++;
    },
    toggleAdding() {
      this.adding = !this.adding;
      if (!this.adding) {
        this.currentCard = null;
      }
    },
    onCardCreated() {
      this.toggleAdding();
      this.getPanel();
    },
    onCardUpdated() {
      this.toggleAdding();
      this.getPanel();
    },
    onEdit(event) {
      this.currentCard = event.card;
      this.adding = true;
    },
  },
};
</script>
