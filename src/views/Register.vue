<script setup>
import { ref } from 'vue'
import * as firebase from "firebase/app"
import { useRouter } from 'vue-router'


console.log(firebase) // Undefined

  const email = ref('')
  const password = ref('')
  const router = useRouter()
  const register = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((data) => {
        console.log('Successfully registered!');
        router.push('/Home')
      })
      .catch(error => {
        console.log(error.code)
        alert(error.message);
      });
  }
</script>
 <template>
 <v-container class="grey lighten-5 mt-16 mb-6">
    <v-row>
      <v-col cols="12">
        <h1>Create an Account</h1> 
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p><button @click="register">Submit</button></p>
      </v-col>
    </v-row>
 </v-container>
</template>