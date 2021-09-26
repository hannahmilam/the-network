
<template>
  <div class="py-4">
    <div v-if="account.id">
      <div class="text-center">
      <router-link :to="{ name: 'Account' }" class="btn selectable">
      <img :src="account.picture" alt="" class="rounded-circle my-3" height="150">
      </router-link>
      
      </div>
      <br>
      <p class="text-secondary mb-0 pb-0"><small>{{ account.class}}</small></p>
      <h4 class="mt-0 pt-0"><b>{{ account.name }}</b></h4> 
<br />
      <img src="https://s3-alpha-sig.figma.com/img/20b5/5d38/484e62ac6ddb89ce44738dd9aa5f8b8a?Expires=1633305600&Signature=VvkZYHEjpRv6gajoSrJO~60KER~TmgVSWBrUS9phrRJd9vb1H~0SOdpVXnNj49DRQcutL6Ovn6laWvcqtQcyLiDWP5c9rtVvAUjit0V1Bn~XP07q8ptDcw3djTn1t-wsIaP5LUCJ49jEJf-13fwm3KDtPVVoikn0eLbGQm2cqEPoR19R-48paAU7kshbVN4D4JXhcB4iuq1DLwnPt16cNDn~0Mbyyc1RdUf4fYgO3Y9~jIc0hnJvHSJNj3E-zsPYlhqlBuGCwa6altb1pE2atOARYa5C8Rnc8gZIa8jkoBpJQ~DdhBSe8uOxO1dnBUGH~~QiSmcGhbJgHgrhcKRfQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="github icon" class="images my-3"> <a :href="account.github" class="selectable"> Github </a>
      <br />
      <img src="https://s3-alpha-sig.figma.com/img/c5fc/21c3/e02b76f63f0496bab55c6c3de1d32431?Expires=1633305600&Signature=J5TMXj2EENMW1oxvKL~psVwxTTOYxwg5PuWNGkvugGJKEWpcM0CGraO02XSuTf8KNO-pWsPnIGClQNyARX7CI-pfhh~CggNJHxnEV782POOexH-BGZjKjX18kp5OSoQDI2TwU51WrunmJy~f3f1LkxyCebSrpmKq7~TGM9IpHh5xUR-VO3~g55QpTZZf1GBdaCmYqz3xVQ1--LOVEnx4orcENer5K8LQF4isgczF2TGUQuHvkaezmooZ3PRjYKEBKyoRBnlDkMtMtB0xPbsCY84EKlYug-F28TpuK2h9EWCNmoDNdiA~JZKbm4zBYB5BXVoyMsAdCcApOoE-SZ3Uqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="linked in icon" class="images my-3"> <a :href="account.linkedin" class="selectable"> LinkedIn </a>
      <br />
      <img src="https://s3-alpha-sig.figma.com/img/0329/e39a/c555e9aaaec88598ce7a9d0f36807876?Expires=1633305600&Signature=VYbtbfOmRm3Zia~31wrOkzygksnBC-lGs6c1c5U7l~W~jQ2gzWDOTFEYh4cUK8zefNZEV8TAspYnTR~cixqpTz2ahAknvLlkcpS9wztZMNyNZDUzRKtEmkb5xF9Xg3xcP1XKki-ZsH4SEVLtLqpN5FVlbfn9NlPWj0tB7GJy~ZjR~Ya2Q5M7IJ~e9UewGBUrTd007ALk4n~EHbP7MYEk6l4snjLjFJ-~IBdCHDYoXA31Gbr1lGBoMauEaXWUEoSBDeZnkQDGapDFYMD0YuXtz1wniRJkp-uwyhnxD8nzKYh~leYnOzWHXLVlpaTiAlggwEbkvomVii6ClexnGiv5EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="resume icon" class="images my-3"> <a :href="account.resume" class="selectable"> Resume </a>
   
<br/>
<br/>

      <button class="btn selectable text-danger lighten-30" @click="logout" title="Logout">
       <p class="selectable">Logout</p>
      </button>
    </div>

    <div v-else>
      <button class="btn selectable text-success lighten-30" @click="login">
        <b>
          Login
        </b>
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AuthService } from '../services/AuthService.js'
import { AppState } from '../AppState.js'
import Pop from '../utils/Pop.js'
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
    },
  setup() {
    return {
      posts: computed(() => AppState.posts),
      profile: computed(() => AppState.profile),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithRedirect()
      },
      async logout() {
        const yes = await Pop.confirm('Are you sure you want to logout', '', 'warning')
        if (!yes) { return }
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.images{
  height: 30px;
}
a{
  color: rgb(27, 26, 26);
}
</style>