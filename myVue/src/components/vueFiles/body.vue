<script setup>
import { computed } from "vue"
import { useStore } from 'vuex';
const store = useStore()
const gamesList = computed(() => store.getters["games/games"])

</script>

<template>
    <div class="flex w-[80%]  mt-[15%]  justify-evenly bg-slate-100">
        <div class="bg-white w-[60%] mx-5 my-5 flex  flex-col justify-center">
            <div class="w-[100%] flex items-center justify-center">
                <img class="my-9" src="https://gtorr.net/templates/GTORR/images/b1.png" alt="">
            </div>
            <div  v-for="game, index in gamesList">

                <div  class="ml-[2%] my-8 flex">
                    <img class="w-[290px] hover:opacity-[0.8] h-[435px]" :src="game.img" alt="">
                    <div class="flex ml-6 flex-col items-start">
                        <h1 class="mt-6 cursor-pointer text-2xl font-bold">{{ game.name }}</h1>
                        <div class="flex  mt-2 items-center justify-center">
                            <p class="px-2 cursor-pointer  py-1 m-[2px] rounded-[6px] bg-cyan-600"
                                v-for="categ in game.categories ">
                                {{ categ }}
                            </p>
                        </div>
                        <div class="flex flex-col">
                            <h1 class="mt-3 text-[20px] text-black font-bold underline">ინფორმაცია თამაშზე</h1>
                            <p class="text-black text-[15px] font-bold ">გამოსვლის წელი: <span class="font-[300]">{{
                                game.releaseDate }}</span> </p>
                            <p class="text-black text-[15px] font-bold ">შემქმნელი: <span class="font-[300]">{{ game.creator
                            }}</span> </p>
                            <p class="text-black text-[15px] font-bold ">ენა: <span class="font-[300]">{{ game.language
                            }}</span> </p>

                        </div>

                        <div class="flex flex-col mt-6">
                            <h1 class="mt-3 text-[20px] text-black font-bold underline">მოკლე აღწერა</h1>
                            <p class="text-black">{{ game.description }}</p>

                        </div>
                    </div>

                </div>


            </div>

        </div>

        <div class="flex items-center mt-5 justify-center h-[40px] w-[25%]">
            <input class="h-[40px] mx-5 border-gray-500 border-2 focus:outline-none px-4" placeholder="მოძებნე თამაში"
                type="text">
            <button class="text-black h-[20px]">ძებნა</button>

        </div>

    </div>
</template>