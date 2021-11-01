<template>
  <v-app-bar
    app
    dense
  >
    <div>
      Onyx Insight
    </div>
    <v-spacer />
    <v-btn
      icon
      small
      class="mx-3"
      @click="darkMode = !darkMode"
    >
      <v-icon>
        mdi-brightness-6
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Header',

  data: () => ({
    darkMode: false,
  }),

  watch: {
    darkMode: {
      immediate: true,
      handler(newValue) {
        this.$vuetify.theme.dark = newValue;
      },
    },
  },
};
</script>

<style scoped>

</style>
