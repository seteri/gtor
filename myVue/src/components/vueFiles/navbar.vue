<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';
const store = useStore()
const navbarComponents = computed(() =>store.getters["navbar/navbarComponents"])
const gameCategories = computed(() =>store.getters["navbar/gameCategories"])
const showGameCategories = computed(() =>store.getters["navbar/showGameCategories"])

const toggleCategories = (index) =>{
    if(index == 0){
        store.commit("navbar/toggleGameCategories")
    }

}

</script>

<template>

    <div class="w-[100%] h-[90px] bg-[rgba(0,0,0,0.5)] fixed flex justify-evenly items-center">
        <h1  class="text-red-600  font-extrabold text-3xl"><a href="localhost:5173/">SETERI.NET</a></h1>
        <div @click="() =>toggleCategories(index)" class="cursor-pointer border-l-2 px-4 rounded-[5px] flex flex-col justify-center border-blue-600 hover:border-l-8 hover:border-red-600 transition-all" v-for="component,index in navbarComponents">
            <p class="font-bold text-xl">{{ component.name }}</p>
            <p class=" text-[15px] text-slate-400">{{ component.description }}</p>
        </div>
        <ul v-if="showGameCategories" class="absolute left-[22%] top-[105%] bg-[rgba(0,0,0,0.5)] rounded-xl p-5">
                <li  class="text-[20px] text-slate-400 py-2 hover:border-b-[1px]" v-for="category in gameCategories">
                    {{ category }}
                </li>
            </ul>

        <div class="flex rounded-xl border-[2px] border-slate-400 items-center justify-between">
            <p class="p-4 hover:text-red-400 cursor-pointer">შესვლა</p>
            <p class="p-4 hover:text-red-400 cursor-pointer">რეგისტრაცია</p>
        </div>

        
        
    </div>

</template>
