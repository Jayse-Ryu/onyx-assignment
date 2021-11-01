<template>
  <div>
    <v-container>
      <Cluster
        :loading="loading"
        :turbines="formattedAlarms"
      />
      <TurbineList
        :loading="loading"
        :turbines="formattedAlarms"
      />
    </v-container>
  </div>
</template>

<script>
import turbineApi from '../api/turbine/turbine';
import Cluster from './widgets/Cluster.vue';
import TurbineList from './widgets/TurbineList.vue';

export default {
  name: 'Dashboard',

  components: {
    Cluster,
    TurbineList,
  },

  data: () => ({
    loading: false,
    alarms: [],
  }),

  computed: {
    formattedAlarms() {
      /*
      * Object values structure will be
      * Tn : {
      *   critical: n,
      *   warning: n,
      *   proportion: n,
      * },
      * */
      const format = {};

      if (this.alarms && this.alarms.length > 0) {
        this.alarms.forEach((el) => {
          if (!format[el.turbine]) { format[el.turbine] = { critical: 0, warning: 0 }; }
          if (el.level === 1) {
            format[el.turbine].warning += el.count;
          } else if (el.level === 2) {
            format[el.turbine].critical += el.count;
          }
          format[el.turbine].proportion = Math
            .round((format[el.turbine].critical
                / (format[el.turbine].critical + format[el.turbine].warning)) * 100);
        });
      }

      return format;
    },
  },

  mounted() {
    this.getAlarms();
  },

  methods: {
    async getAlarms() {
      try {
        this.loading = true;
        this.alarms = await turbineApi.getTurbineAlarms();
      } catch (err) {
        console.log(err);
        this.$toast.error('An error occurred during get alarm list');
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>

</style>
