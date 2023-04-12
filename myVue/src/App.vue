<script setup>
import navbar from "./components/vueFiles/navbar.vue"
import contentContainer from "./components/vueFiles/body.vue"
import { useStore } from 'vuex';
const store = useStore()


</script>

<template>

<div class="flex items-center  flex-col">
    <navbar></navbar>
    <contentContainer></contentContainer>
</div>

</template>

