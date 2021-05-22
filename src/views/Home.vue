<template>
  <div class="page-container black-page-container">
    <logout-button />
    <div class="home">
      <h1 v-if="!adding">
        Namespaces
        <button class="btn add-resource" @click="toggleAdding">
          <i class="fa fa-plus"></i>
        </button>
      </h1>
      <form-namespace v-if="adding" @success="onNamespaceAdded">
        <button class="btn btn-success" @click="toggleAdding">
          Cancel
        </button>
      </form-namespace>
      <div class="namespaces-container" v-if="!adding">
        <namespace
          v-for="(n, i) in user.namespaces"
          :key="n._id"
          :namespace="n"
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
    position: relative;
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
import {mapGetters} from 'vuex';
import Namespace from '../components/Namespace.vue';
import FormNamespace from '@/components/forms/FormNamespace';
import LogoutButton from '@/components/buttons/LogoutButton';

export default {
  components: {Namespace, FormNamespace, LogoutButton},
  name: 'Home',
  data: () => ({
    currentNamespaceIndex: -2,
    adding: false,
  }),
  mounted() {
    this.animateNamespaces();
  },
  computed: {
    ...mapGetters({user: 'getUser'}),
  },
  methods: {
    animateNamespaces() {
      if (this.currentNamespaceIndex < this.user.namespaces.length) {
        setTimeout(this.animateNamespaces, 200);
      }
      this.currentNamespaceIndex++;
    },
    toggleAdding() {
      this.adding = !this.adding;
    },
    onNamespaceAdded() {
      this.adding = false;
      this.$notify({
        title: 'Namespace successfully created',
        type: 'success',
      });
    },
  },
};
</script>
