<template>
  <v-app id="app">
    <Header />
    <v-main>
      <Dashboard />
    </v-main>
  </v-app>
</template>

<script>
import Header from './views/Header.vue';
import Dashboard from './views/Dashboard.vue';

export default {
  name: 'App',

  components: {
    Header,
    Dashboard,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
html {
  background-color: #212121;
}

#app {
  min-width: 360px;
}
</style>
