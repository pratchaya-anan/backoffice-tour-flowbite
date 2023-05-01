<template>
    <div class="text-center py-10">
        <input type="text" id="default-input" v-model="data.num"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <input type="text" id="default-input" v-model="data.name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        <button type="button" @click="add"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">OK</button>
        <div>{{ data.num }}{{ data.name }}</div>
    </div>
</template>

<script setup lg="ts">
import { storeToRefs } from 'pinia';
import { kao } from '/stores/kao'

const store = kao();
const { id } = storeToRefs(store);
const data = ref([{
    num: 0,
    name: "",
}])

function add() {
    store.additem(data.value)
    // store.num++
    // console.log(data);
}

</script>