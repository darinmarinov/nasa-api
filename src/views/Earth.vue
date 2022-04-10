<script lang="ts">
  import { defineComponent } from 'vue'
  import EarthCardImage from '@/components/EarthCardImage.vue'
  import { dateTimeFormater } from '@/helpers/index'
  import { nasaApiKey, baseUrlEarthApi, long, lat } from '@/constants/index'

  export default defineComponent({
    name: 'Earth',
    components: {
      'card-image': EarthCardImage,
    },
    created() {
    },
    data: (vm) => ({
      long: long,
      lat: lat,
      nasaApiKey: nasaApiKey,
      baseUrl: baseUrlEarthApi,
      date: null,
      selectedDate: null,
      dates: []
    }),
    watch: {
      date(val, oldVal) {
        if(val !== oldVal) {
          const year = val.getFullYear();
          const copiedDate = new Date(this.date);
          this.dates = []
          for (var i = year-1; i >= year - 5; i--) {
            this.dates.push(new Date(copiedDate.setFullYear(i)));   
          }
          this.selectedDate = null
          console.log(val)
        }
      },
    },
    computed: {
      formatedDate() {
        const date = this.selectedDate ? new Date(this.selectedDate) : this.date
        return this.dateTimeFilter(date)
      },
      formatedDates() {
        const newFormatedDates =  this.dates.length> 0 ? this.dates.map(date => date ? this.dateTimeFilter(date) : date) : []
        return newFormatedDates
      }
    },
    methods: {
      dateTimeFilter (date:Date)  {
        return dateTimeFormater(date)
      }
    },
  })
</script>
<template>
    <v-container class="grey lighten-5 mt-16 mb-6">
    <v-row>
      <v-col cols="12" :sm="formatedDates.length > 0 ? '6' : '12'">
        <Datepicker
          v-model="date"
          placeholder="Select Day ..."
          :enableTimePicker="false"
        ></Datepicker>
      </v-col>
      <v-col cols="12" sm="6" v-if="formatedDates.length > 0">
        <select v-model="selectedDate">
          <option :value="null" disabled selected>Select a date from the last five years on the same day or choose from datePicker</option>
          <option v-for="item of formatedDates" :key="item" :value="item">{{item}}</option>
        </select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="d-flex justify-center">
        <card-image :baseUrl="baseUrl" :nasaApiKey="nasaApiKey" :long="long" :lat="lat" :selectedDay="formatedDate"></card-image>
      </v-col>
    </v-row>
    </v-container>
</template>