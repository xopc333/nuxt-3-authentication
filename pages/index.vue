<template>
  <h1 class="h1">Hello World</h1>
</template>

<script setup>
import { onMounted } from "vue";

definePageMeta({
  layout: "default",
});

useHead({
  title: 'Index.html',
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
