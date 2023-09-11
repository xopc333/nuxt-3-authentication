<template>
  <div class="body-wrap">
    <header>
      <ul>
        <li>
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/about">About</nuxt-link>
        </li>
        <li v-if="!authenticated" class="loginBtn">
          <nuxt-link to="/login">Login</nuxt-link>
        </li>
        <li v-if="authenticated" class="loginBtn">
          <nuxt-link @click="logout">Logout</nuxt-link>
        </li>
      </ul>
    </header>
    <div class="mainContent">
      <slot/>
    </div>
    <footer>
      <h1>Footer</h1>
    </footer>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {storeToRefs} from 'pinia';
import {useAuthStore} from '~/store/auth';

// const authenticated = ref();
// authenticated.value = useAuthStore().authenticated;
const router = useRouter();

const {logUserOut} = useAuthStore(); // use authenticateUser action from  auth store
const {authenticated} = storeToRefs(useAuthStore());

const logout = () => {
  logUserOut();
  router.push('/login');
};

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
