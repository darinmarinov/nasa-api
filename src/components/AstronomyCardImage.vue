<script lang="ts">
import { defineComponent } from 'vue'
  import { dateTimeFormater } from '@/helpers/index'

export default defineComponent({
  name: 'HomeCardImage',
  components: {},
  props: {
    baseUrl: String,
    nasaApiKey: String,
    selectedDays: Array
  },
  async created() {
    const date = this.dateTimeFilter(new Date())
    await this.fetchNasaPicOfTheDay(date)
  },
  data: (vm) => ({
    show: false,
    imageProp: {
      width: 350,
      src: '',
      url: '',
      title: '',
      explanation: '',
      date: null,
    },
    isLoaded: false,
  }),
  watch: {
    selectedDays(val, oldVal) {
      if(val[0] !== oldVal[0] && !val[1]) {
          this.fetchNasaPicOfTheDay(val[0])
      }
    }
  },
  methods: {
    async fetchNasaPicOfTheDay(date:String) {
      try {
        if (this.nasaApiKey && this.baseUrl) {
          const url = this.baseUrl + this.nasaApiKey + '&date=' + date

          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              this.imageProp.src = data.hdurl
              this.imageProp.url = data.url
              this.imageProp.title = data.title
              this.imageProp.explanation = data.explanation
              this.imageProp.date = data.date

              this.isLoaded = true
            })
        }
      } catch (error) {}
    },

    dateTimeFilter(date: Date) {
      return dateTimeFormater(date)
    },
  },
})
</script>
<template>
  <div class="container" v-if="isLoaded">
    <v-card max-width="530" color="#000">
      <input type="range" min="100" max="530" step="1" v-model="imageProp.width">
      <v-img
        v-if="!show"
        :aspect-ratio="1/1"
        :width="imageProp.width"
        :lazy-src="imageProp.url"
        :src="imageProp.src"
        cover
      ></v-img>
      <v-card-title class="text-center mt-2 mb-2"
        >NASA APOD: Astronomy Picture of the Day
      </v-card-title>
      <v-card-subtitle class="justify-center">
        {{ imageProp.title }} - {{ imageProp.date }}
      </v-card-subtitle>
      <v-card-actions>
        <v-btn color="orange-lighten-2" @click="show = !show">
          Click to expand
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
        ></v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            {{ imageProp.explanation }}
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </div>
</template>
