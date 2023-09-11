<template>
  <h1 class="h1">Hello Home Page</h1>
</template>

<script setup>
import {onMounted} from "vue";

definePageMeta({
  layout: "default",
  //middleware: 'auth'
});

useHead({
  title: 'Home',
})

onMounted(() => {

})
</script>

<style lang="sass" scoped>
.h1
  width: max-content
  margin: 60px auto 0
  color: white
  font: 60px 'Roboto-bold'
</style>
