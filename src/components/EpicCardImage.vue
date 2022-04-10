<script lang="ts">
import { defineComponent } from 'vue'
import { epicImgeBaseUrl } from '@/constants/index'

export default defineComponent({
  name: 'EpicCardImage',
  props: {
    baseUrl: String,
    nasaApiKey: String,
    selectedDate: String,
  },
  async created() {
    await this.fetchNasaEpicPic(this.selectedDate?this.selectedDate:'No date')
  },
  data: (vm) => ({
    epicImageBaseUrl: epicImgeBaseUrl,
    epicImageUrl: '',
    isLoaded: false,
  }),
  watch: {
    selectedDate(val, oldVal) {
      if(val !== oldVal) {
          this.fetchNasaEpicPic(this.selectedDate?this.selectedDate:'No date')
      }
    }
  },
  methods: {
    async fetchNasaEpicPic(date:String) {
      try {
        if (this.nasaApiKey && this.baseUrl) {
          const transformedDate = date.split('/').join('-')
          const url = 'https://api.nasa.gov/EPIC/api/natural/date/' + transformedDate + '?api_key=' + this.nasaApiKey

          fetch(url)
            .then(response => response.json())
            .then((data) => {
              this.epicImageUrl = `${this.epicImageBaseUrl}${date.split('-').join('/')}/png/${data[0].image}.png`
              this.isLoaded = true
            })
        }
      } catch (error) {
        console.log(error)
      }
    },
  }
})
</script>
<template>
    <v-card v-if="isLoaded" max-width="1200" color="#000" class="text-center">
      <v-img
        aspect-ratio="16/9"
        width="600"
        :src="epicImageUrl"
        cover
      ></v-img>
    </v-card>
</template>