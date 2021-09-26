<template>
   <div class="container-fluid">
    <div v-if="profile">
      <div class="row justify-content-center">
        <div class="card m-0 p-0 shadow">
          <div class="card-header cover-img" :style="{backgroundImage: `url(${profile.coverImg})`}">
            <img :src="profile.picture" alt="" class="rounded-circle mt-2 profile-picture" height="150">
          </div>
          <div class="card-body">
        <div class="row mt-3">
            <div class="col-md-4 offset-8 text-end"> 
           <a :href="profile.github" class="selectable">
          <img src="https://s3-alpha-sig.figma.com/img/20b5/5d38/484e62ac6ddb89ce44738dd9aa5f8b8a?Expires=1633305600&Signature=VvkZYHEjpRv6gajoSrJO~60KER~TmgVSWBrUS9phrRJd9vb1H~0SOdpVXnNj49DRQcutL6Ovn6laWvcqtQcyLiDWP5c9rtVvAUjit0V1Bn~XP07q8ptDcw3djTn1t-wsIaP5LUCJ49jEJf-13fwm3KDtPVVoikn0eLbGQm2cqEPoR19R-48paAU7kshbVN4D4JXhcB4iuq1DLwnPt16cNDn~0Mbyyc1RdUf4fYgO3Y9~jIc0hnJvHSJNj3E-zsPYlhqlBuGCwa6altb1pE2atOARYa5C8Rnc8gZIa8jkoBpJQ~DdhBSe8uOxO1dnBUGH~~QiSmcGhbJgHgrhcKRfQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="github icon" class="images m-3">  
          </a>
      <a :href="profile.linkedin" class="selectable"> 
      <img src="https://s3-alpha-sig.figma.com/img/c5fc/21c3/e02b76f63f0496bab55c6c3de1d32431?Expires=1633305600&Signature=J5TMXj2EENMW1oxvKL~psVwxTTOYxwg5PuWNGkvugGJKEWpcM0CGraO02XSuTf8KNO-pWsPnIGClQNyARX7CI-pfhh~CggNJHxnEV782POOexH-BGZjKjX18kp5OSoQDI2TwU51WrunmJy~f3f1LkxyCebSrpmKq7~TGM9IpHh5xUR-VO3~g55QpTZZf1GBdaCmYqz3xVQ1--LOVEnx4orcENer5K8LQF4isgczF2TGUQuHvkaezmooZ3PRjYKEBKyoRBnlDkMtMtB0xPbsCY84EKlYug-F28TpuK2h9EWCNmoDNdiA~JZKbm4zBYB5BXVoyMsAdCcApOoE-SZ3Uqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="linked in icon" class="images m-3"> 
      </a>
      <a :href="profile.resume" class="selectable">
      <img src="https://s3-alpha-sig.figma.com/img/0329/e39a/c555e9aaaec88598ce7a9d0f36807876?Expires=1633305600&Signature=VYbtbfOmRm3Zia~31wrOkzygksnBC-lGs6c1c5U7l~W~jQ2gzWDOTFEYh4cUK8zefNZEV8TAspYnTR~cixqpTz2ahAknvLlkcpS9wztZMNyNZDUzRKtEmkb5xF9Xg3xcP1XKki-ZsH4SEVLtLqpN5FVlbfn9NlPWj0tB7GJy~ZjR~Ya2Q5M7IJ~e9UewGBUrTd007ALk4n~EHbP7MYEk6l4snjLjFJ-~IBdCHDYoXA31Gbr1lGBoMauEaXWUEoSBDeZnkQDGapDFYMD0YuXtz1wniRJkp-uwyhnxD8nzKYh~leYnOzWHXLVlpaTiAlggwEbkvomVii6ClexnGiv5EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="resume icon" class="images m-3"> 
       </a>
      </div>
      </div>
     <p class="text-secondary mb-0 pb-0"><small>{{ profile.class }}</small></p>
          <h4 class="mt-0 pt-0"><b>{{ profile.name }}</b></h4>
          <p>{{ profile.bio }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <h4 class="text-light">
        Please Wait...
      </h4>
    </div>
    <div class="row justify-content-center" v-if="account.id === profile.id">
      <PostForm />
      </div>
    <div class="row justify-content-center">
      <Post v-for="p in posts" :key="p.id" :post="p" />
    </div>

    <footer>
      <OlderNewer />
    </footer>
  </div>
</template>

<script>
import { computed, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { postsService } from '../services/PostsService'
import { profilesService } from '../services/ProfilesService'
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
export default {
  setup() {
    const route = useRoute()
    async function getPosts() {
      try {
        await postsService.getPosts({ creatorId: route.params.id })
      } catch (error) {
        Pop.toast('unable to get posts', 'error')
        logger.log(error.message)
      }
    }
    watchEffect(async() => {
      if (route.params.id) {
        await profilesService.getProfileById(route.params.id)
        getPosts()
      }
    })
    return {
      profile: computed(() => AppState.profile),
      account: computed(() => AppState.account),
      posts: computed(() => AppState.posts)
    }
  }
}
</script>

<style>
.cover-img{
  height: 25vh;
  background-position: center center;
}

.profile-picture{
position: relative;
bottom: -5em;
border: solid #31b0b4c7;
}

.images{
  height: 20px;
}
a{
  color: rgb(27, 26, 26);
}
</style>