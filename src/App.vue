<template>
  <Header/>
  <router-view />
</template>
<script lang="ts">
  import Header from '@/components/Header.vue'
  import { defineComponent } from 'vue'

 export default defineComponent({
    name: 'Home',
    components: {
      Header
    },
 })
</script>
<style>
.body {
  background: #63cdda;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 3vw;
  text-align: center;
}
.v-card-title {
  font-size: 1.8vw;
  line-height: 1.6vw;
  font-weight: 600;
}
.v-card-text {
  color: #fff;
  opacity: 1;
}
.v-card-subtitle {
  color: orange;
  font-weight: 700;
}
.text-center {
  text-align: center !important;
}
.v-responsive.v-img {
  margin: 0 auto;
}
select {
  appearance: none;
  background-color: lightcyan !important;
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/1255/caret--down-15.png");
  background-position: right;
  background-repeat: no-repeat;
  border-color: #b3cccc !important;
  border-radius: 0.2em;
  border-style: solid;
  border-width: 1px;
  border-right-color: #869999;
  border-bottom-color: #869999;
  color: black;
  padding: 0.33em 0.5em;
  width: 100%;
}

select::-ms-expand {
  display: none;
}
</style>