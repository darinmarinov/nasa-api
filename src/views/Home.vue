<script lang="ts">
  import { defineComponent } from 'vue'
  import AstronomyCardImage from '@/components/AstronomyCardImage.vue'
  import TimeLine from '@/components/TimeLine.vue'
  import { dateTimeFormater } from '@/helpers/index'
  import { nasaApiKey, baseUrlApodApi } from '@/constants/index'

  export default defineComponent({
    name: 'Home',
    components: {
      'card-image': AstronomyCardImage,
      'time-line': TimeLine
    },
    created() {
    },
    data: (vm) => ({
      nasaApiKey: nasaApiKey,
      baseUrl: baseUrlApodApi,
      dates: [],
      data:[]
    }),
    computed: {
      formatDates() {
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
      <v-col cols="12" sm="6" :md="formatDates.length > 0 && formatDates[1] ? '4' : '12'">
        <Datepicker
          v-model="dates"
          range 
          placeholder="Select Day ..."
          :enableTimePicker="false"
        ></Datepicker>
        <card-image :baseUrl="baseUrl" :nasaApiKey="nasaApiKey" :selectedDays="formatDates"></card-image>
      </v-col>
      <v-col v-if="formatDates.length > 0 && formatDates[1]" cols="12" sm="6" md="8">
        <time-line :baseUrl="baseUrl" :nasaApiKey="nasaApiKey" :dates="formatDates"></time-line>
      </v-col>
    </v-row>
    </v-container>
</template>