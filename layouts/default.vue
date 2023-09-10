<template>
  <div class="body-wrap">
    <slot />
  </div>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  const $bodyWrap = document.querySelector(".body-wrap");
  const root = document.documentElement;

  function sizeBody() {
    let W_Height = window.screen.availHeight; //window.outerHeight;
    let W_Width = window.screen.availWidth; //outerWidth;
    let n = W_Width / W_Height;

    if (W_Width > W_Height && n > 1.78) {
      let vw = Math.floor(W_Height * 1.777777777777778);
      root.style.setProperty("--vw", `${vw / 100}px`);
      console.log(vw);
    } else {
      root.style.setProperty("--vw", "1vw");
    }

  }
  sizeBody();
  window.addEventListener("resize", sizeBody);
})
</script>

<style lang="sass" scoped>

</style>
