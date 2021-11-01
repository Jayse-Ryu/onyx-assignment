<template>
  <div>
    <v-row>
      <template v-if="loading">
        <v-col
          v-for="i in 3"
          :key="`skeletonCard${i}`"
          cols="12"
          sm="6"
          md="4"
        >
          <v-skeleton-loader
            v-bind="{ elevation: 0 }"
            type="image, article"
          />
        </v-col>
      </template>
      <template v-else-if="Object.entries(turbines).length === 0">
        <v-col cols="12">
          <div>
            No data to display
          </div>
        </v-col>
      </template>
      <template v-else>
        <v-col
          v-for="(turbine, index) in Object.keys(turbines)"
          :key="`turnbine_${index}`"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card>
            <v-card-title>
              {{ turbine }}
            </v-card-title>
            <v-card-text>
              <div>
                Critical: {{ turbines[turbine].critical }}
              </div>
              <div>
                Warning: {{ turbines[turbine].warning }}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'TurbineList',

  props: {
    loading: {
      type: Boolean,
      default: false,
    },

    turbines: {
      type: Object,
      default: null,
    },
  },
};
</script>

<style scoped>

</style>
