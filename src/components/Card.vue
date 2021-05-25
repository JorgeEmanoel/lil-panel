<template>
  <a
    :href="card.url"
    target="_blank"
    :style="computedStyle"
  >
    <div class="inner-container">
      <span :style="`color: ${card.textColor}`">{{card.name}}</span>
      <div class="backdrop" v-if="card.backgroundUrl"></div>
    </div>
    <div class="buttons-container">
      <button @click.prevent="onEdit">
        <i class="fa fa-edit"></i>
      </button>
      <button @click.prevent="onDelete">
        <i class="fa fa-trash"></i>
      </button>
    </div>
  </a>
</template>

<style scoped>
  a {
    display: inline-block;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 20px;
    width: 60px;
    height: 60px;
    text-decoration: none;
    border: 1px dashed #333;
    border-radius: 10px;
    margin: 10px;
    transition: all .5s;
    position: relative;
    opacity: 0;
    font-size: 14px;
    z-index: 1;
  }

  a .backdrop {
    border-radius: 10px;
    display: block;
    position: absolute;
    width: 102%;
    height: 102%;
    left: -1px;
    top: -1px;
    background: rgba(0, 0, 0, .8);
    z-index: -1;
  }

  .inner-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
  }

  a:first-child {
    margin-left: 0;
  }

  a span,
  a small {
    display: block;
    word-break: break-all;
    text-shadow: 0 0 2px #000;
    font-weight: bolder;
    color: #333;
    z-index: 999;
  }

  a:hover > .buttons-container {
    opacity: 1;
  }

  .buttons-container {
    opacity: 0;
    bottom: -35px;
    padding-top: 20px;
    position: absolute;
    transition: all .3s;
  }

  .buttons-container button {
    background: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    margin: 5px;
    padding: 5px;
  }
</style>

<script>
import Card from '@/services/Card';
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
  computed: {
    computedStyle() {
      let style = '';

      if (this.card.backgroundUrl) {
        style += `background-image: url(${this.card.backgroundUrl});`;
        style += 'background-color: #999;';
      }

      if (this.card.backgroundColor && !this.card.backgroundUrl) {
        style += `background-color: ${this.card.backgroundColor};`;
      }

      return style;
    },
  },
  methods: {
    async onDelete() {
      if (!confirm('Are you sure you want to delete this card?')) {
        return false;
      }

      this.deleting = true;
      const result = await Card.delete(this.card._id);
      this.deleting = false;

      if (!result.ok) {
        return this.$notify({
          title: result.message,
          type: 'error',
        });
      }

      this.$notify({
        title: 'Card deleted',
        type: 'success',
      });
      this.$emit('deleted');
    },
    onEdit() {
      this.$emit('edit', {card: this.card});
    },
  },
};
</script>
