<template>
  <q-page class="q-pa-sm bg-white">
    <div>
      <div class="text-h6 q-pt-sm q-pl-md">Customer Management</div>
    </div>
    <div class="row q-pa-md q-gutter-sm">

      <div class="col-12">
        <q-item>
          <q-input dense outlined class="full-width" v-model="name" label="Full Name *"/>
        </q-item>
      </div>
      <div class="col-12">
        <q-item>
          <q-input dense autogrow outlined v-model="description" class="full-width"
                   label="Description *"/>
        </q-item>
      </div>
      <div class="col-12">
        <q-item>
          <q-input dense autogrow outlined v-model="startDate" class="full-width"
                   label="Start Date *"/>
        </q-item>
      </div>
      <div class="col-12">
        <q-item>
          <q-input dense autogrow outlined v-model="endDate" class="full-width"
                   label="End Date *"/>
        </q-item>
      </div>
    </div>

    <div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn color="secondary" label="Create" @click="createCustomer" />
        <q-btn color="white" text-color="black" label="Update" @click="updateCustomer"/>
        <q-btn color="primary" label="Delete" @click="deleteCustomer"/>
        <q-btn color="amber" glossy label="Get ALl" @click="getAllCustomers" />
      </div>
    </div>
    <div>
      <tables-basic/>
    </div>
  </q-page>
</template>

<script>
import {defineAsyncComponent, defineComponent} from 'vue';
import {ref} from 'vue';

export default defineComponent({
  name: "Checkout",
  components: {
    TablesBasic: defineAsyncComponent(() => import('components/tables/TableBasic'))
  },

  setup() {
    const name = ref(null)
    const description = ref(null)
    const startDate = ref(null)
    const endDate = ref(null)

    function createCustomer(){
      console.log(name.value,description.value,startDate.value,endDate.value)
    }
    function updateCustomer(){

    }
    function deleteCustomer(){

    }
    function getAllCustomers(){

    }

    return {
      name,
      description,
      startDate,
      endDate,
      createCustomer,
      updateCustomer,
      deleteCustomer,
      getAllCustomers
    }
  }
})
</script>

<style scoped>

</style>
