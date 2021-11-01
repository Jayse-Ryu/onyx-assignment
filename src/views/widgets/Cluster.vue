<template>
  <div
    id="clusterWrap"
    class="d-flex"
  >
    <template v-if="loading">
      <div
        class="d-flex align-center"
        style="min-height: 70px;"
      >
        <v-skeleton-loader
          v-for="i in 4"
          :key="`skeletonCluster${i}`"
          v-bind="{ class: 'mr-n5',elevation: 0 }"
          type="list-item-avatar"
        />
      </div>
    </template>
    <template v-else-if="Object.entries(turbines).length === 0">
      <div
        class="d-flex align-center"
        style="min-height: 70px;"
      >
        No data to display
      </div>
    </template>
    <template v-else>
      <div
        v-for="(key, index) in Object.keys(turbines)"
        :key="`turbineAlarm_${index}`"
        class="cluster pa-2"
      >
        <v-badge
          class="badgeWrap"
          overlap
          right
          :content="turbines[key].critical + turbines[key].warning"
        >
          <v-avatar
            class="turbineAvatar"
            size="50"
          >
            <v-icon>
              mdi-wind-turbine
            </v-icon>
          </v-avatar>
          <v-progress-circular
            class="progressCircle"
            size="50"
            :value="turbines[key].proportion"
            color="red"
            :rotate="-90"
          />
          <div
            class="turbineName"
          >
            {{ key }}
          </div>
        </v-badge>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Cluster',

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

<style lang="scss" scoped>
  #clusterWrap {
    overflow-x: auto;

    .cluster {
      position: relative;
      width: 65px;
      height: 75px;

      .badgeWrap {
        position: relative;
        display: flex;
        justify-content: center;
        align-content: center;
        width: 65px;

        .turbineAvatar {
          position: absolute;
        }

        .progressCircle {
          position: absolute;
        }

        .turbineName {
          font-size: 10px;
          position: relative;
          bottom: -6px;
        }
      }
    }
  }
</style>

<style lang="scss">
  .progressCircle {
    .v-progress-circular__underlay {
      stroke: rgba(240, 180, 40, 0.5) !important;
    }
  }
</style>
