<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EarthCardImage',
  components: {},
  props: {
    baseUrl: String,
    nasaApiKey: String,
    selectedDay: String,
    long: String,
    lat: String
  },
  async created() {
    await this.fetchNasaEarthPic(this.hardcodedInitialDate)
  },
  data: (vm) => ({
    show: false,
    dataProp: {
      width: 650,
      id: null,
      src: null,
      date: null,
    },
    hardcodedInitialDate: '2015-05-08',
    isLoaded: false,
    response: false,
    msg: 'Not found imagery picture for this day (select another day)'
  }),
  watch: {
    selectedDay(val, oldVal) {
      if(val !== oldVal) {
          this.fetchNasaEarthPic(val)
      }
    }
  },
  methods: {
    async fetchNasaEarthPic(date:String) {
      try {
        if (this.nasaApiKey && this.baseUrl) {
          const url = this.baseUrl + 'lon=' + this.long + '&lat=' + this.lat  + '&date=' + date + '&&dim=0.225&api_key=' + this.nasaApiKey

          fetch(url)
            .then((response) => {
              if (response.ok) {
                this.response = response.ok
                return response.json()
              } else {
                this.response = response.ok
                return this.msg
              }
            })
            .then((data) => {
              this.dataProp.src = data.url
              this.dataProp.id = data.id
              this.dataProp.date = data.date

              this.isLoaded = true
            })
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
})
</script>
<template>
    <v-card v-if="isLoaded && response" max-width="1200" color="#000" class="text-center">
      <input type="range" min="100" max="1200" step="1" v-model="dataProp.width">
      <v-img
        v-if="!show"
        :aspect-ratio="16/9"
        :width="dataProp.width"
        :lazy-src="dataProp.src"
        :src="dataProp.src"
        cover
      ></v-img>
      <v-card-title class="justify-center mt-2 mb-2"
        > {{dataProp.date}}
      </v-card-title>
    </v-card>
  <h2 v-if="!response" class="text-center ">{{msg}}</h2>
</template>
