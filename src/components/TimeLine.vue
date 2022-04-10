<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'TimeLine',
    props: {
      dates: Array,
      nasaApiKey: String,
      baseUrl: String,
    },
    async created() {
        await this.fetchNasaRangeDates()
    },
    data() {
      return {
        data: [],
      }
    },
    watch: {
      dates(val, oldVal) {
        if((val[0] !== oldVal[0] || val[1] !== oldVal[1]) && val[1]) {
          this.fetchNasaRangeDates()
        }
      }
    },
    methods: {
      async fetchNasaRangeDates() {
        if (this.nasaApiKey && this.baseUrl && this.dates && this.dates[1] !== null) {
          try {
            const url = this.baseUrl + this.nasaApiKey + '&start_date=' + this.dates[0] + '&end_date=' + this.dates[1]

            fetch(url)
              .then((response) => response.json())
              .then((data) => {
                this.data = data
              })
          } catch (error) {}
        }
      },
    },
  })
</script>
<template>
  <v-timeline single-side="after">
    <v-timeline-item
      v-for="item in data"
      :key="item.date"
      size="large"
      class="timeline"
    >
     <template v-slot:icon>
      <v-avatar>
        <v-img v-if="item && item.url"
            :src="item.url"
            cover
        ></v-img>
      </v-avatar>
     </template>
      <template v-slot:opposite>
        <span>{{item.title}}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="text-h5">
          {{item.copyright || 'None'}} - {{item.date}}
        </v-card-title>
        <v-card-text>{{item.explanation}}</v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<style>
.timeline .v-timeline-divider__dot--size-large {
    width: 300px;
    height: 300px;
}

.timeline .v-avatar.v-avatar--density-default {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>