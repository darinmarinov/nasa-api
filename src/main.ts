import { createApp } from "vue";
import App from "./App.vue";
import { vuetify } from "./plugins/vuetify";
import router from "./router";
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import * as firebase from "firebase/app"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDgrZfPkhTmcNbzwhXTZwJaV3iFRQ_gVRE",
    authDomain: "nasa-api-fd268.firebaseapp.com",
    projectId: "nasa-api-fd268",
    storageBucket: "nasa-api-fd268.appspot.com",
    messagingSenderId: "501108916287",
    appId: "1:501108916287:web:341572edc61f21f580388a"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log(firebase.initializeApp)

const app = createApp(App).use(router).use(vuetify)

app.component("Datepicker", Datepicker); // global registration - can be used anywhere

app.mount("#app");

