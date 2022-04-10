<script lang="ts">
  import { defineComponent } from 'vue'
  import EpicCardImage from '@/components/EpicCardImage.vue'
  import { nasaApiKey, baseUrlEpicAvailable } from '@/constants/index'

  export default defineComponent({
    name: 'Epic',
    components: {
      'card-image': EpicCardImage,
    },
    async created() {
      await this.fetchNasaEpicAllDates()
    },
    data: (vm) => ({
      nasaApiKey: nasaApiKey,
      baseUrl: baseUrlEpicAvailable,
      selectedDate: null,
      isLoaded: false,
      dates: []
    }),
    computed: {
    },
    methods: {
      async fetchNasaEpicAllDates() {
        try {
          if (this.nasaApiKey && this.baseUrl) {
            const url = this.baseUrl + '/?api_key=' + this.nasaApiKey
            fetch(url)
              .then(response => response.json())
              .then((data) => {
                const date = data[data.length - 1]
                this.selectedDate = date.split('-').join('/')
                this.isLoaded = true
                this.dates.push(...data)
              })
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
})
</script>
<template>
  <v-container class="grey lighten-5 mt-16 mb-6">
    <v-row>
      <v-col cols="12" sm="12">
        <select v-model="selectedDate">
          <option :value="null" disabled selected>Select a date</option>
          <option v-for="item of dates" :key="item" :value="item">{{item}}</option>
        </select>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="selectedDate && isLoaded" cols="12" class="d-flex justify-center">
        <card-image
          :baseUrl="baseUrl"
          :nasaApiKey="nasaApiKey"
          :selectedDate="selectedDate"
        ></card-image>
      </v-col>
    </v-row>
  </v-container>
</template>

