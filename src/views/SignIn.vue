<script setup>
  import { ref } from 'vue'
  import * as firebase from 'firebase/app'
  import { useRouter } from 'vue-router' // import router
  const email = ref('')
  const password = ref('')
  const errMsg = ref()
  const router = useRouter()
  const signIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then((data) => {
        console.log('Successfully logged in!');
        router.push('/Home')
      })
      .catch(error => {
        switch (error.code) {
          case 'auth/invalid-email':
              errMsg.value = 'Invalid email'
              break
          case 'auth/user-not-found':
              errMsg.value = 'No account with that email was found'
              break
          case 'auth/wrong-password':
              errMsg.value = 'Incorrect password'
              break
          default:
              errMsg.value = 'Email or password was incorrect'
              break
        }
      });
  }
</script>

<template>
<v-container class="grey lighten-5 mt-16 mb-6">
    <v-row>
      <v-col cols="12 text-center">
        <h1>Login to Your Account</h1>
        <p><input type="text" placeholder="Email" v-model="email" /></p>
        <p><input type="password" placeholder="Password" v-model="password" /></p>
        <p v-if="errMsg">{{ errMsg }}</p>
        <p><button class="button" @click="signIn">Submit</button></p>
      </v-col>
    </v-row>
</v-container>
</template>
<style scoped>
  input[type='text'],
  input[type='password'] {
    width: 200px;
    height: 39px;
    -webkit-border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;
    -moz-border-radius: 0px 4px 4px 0px/0px 0px 4px 4px;
    border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;
    background-color: #fff;
    -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
    -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
    border: solid 1px #cbc9c9;
    margin-left: -5px;
    margin-top: 13px;
    padding-left: 10px;
  }

  input[type='password'] {
    margin-bottom: 25px;
  }

  .button {
    background-color: #4caf50; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
  }
</style>
