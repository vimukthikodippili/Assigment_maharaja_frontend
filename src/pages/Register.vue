<template>
  <q-layout class="bg-image" v-cloak>
    <q-page-container>
      <q-page class="flex flex-center">
        <q-card class="login-form" v-bind:style="$q.platform.is.mobile?{'width': '60%'}:{'width':'20%'}">
          <q-card-section>
            <q-avatar size="74px" class="absolute-center shadow-10">
              <img src="profile.svg">
            </q-avatar>
          </q-card-section>
          <q-card-section class="q-mt-md">
            <div class="text-h6 text-center">
              Register Form
            </div>

            <q-input v-model="username" type="text" label="username" model-value=""/>
            <q-input v-model="name" type="text" label="Name" model-value=""/>
            <q-input v-model="mobileNumber" type="text" label="Mobile Number" model-value=""/>
            <q-input v-model="dateOfBirth" type="text" label="Date of Birth" model-value=""/>
            <q-input v-model="gender" type="text" label="Gender" model-value=""/>
            <q-input v-model="language" type="text" label="Language" model-value=""/>
            <q-input v-model="password" :type="isPwd ? 'password' : 'text'" placeholder="Enter Password">
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />

              </template>
            </q-input>

          </q-card-section>
          <q-card-actions align="center">
            <q-btn push label="Register" @click="handleRegister" class="text-capitalize" color="primary"></q-btn>
          </q-card-actions>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>

import {defineComponent} from 'vue'
import {ref} from 'vue'

export default defineComponent({
  name: "Register",

  setup() {
    const username = ref(null)
    const password = ref(null)
    const name = ref(null)
    const mobileNumber = ref(null)
    const dateOfBirth = ref(null)
    const gender = ref(null)
    const language = ref(null)

    function handleRegister(){
      console.log(username.value,password.value,name.value,mobileNumber.value,dateOfBirth.value,gender.value,language.value)
      window.location = "/crud";
    }

    return {
      username,
      password,
      name,
      mobileNumber,
      dateOfBirth,
      gender,
      language,
      isPwd: ref('password'),
      handleRegister
    }
  }

})
</script>

<style>
.bg-image {
  background-image: url("~assets/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

[v-cloak] {
  display: none !important;
}
</style>
