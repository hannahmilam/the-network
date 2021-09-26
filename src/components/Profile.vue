<template>
   <div class="container-fluid">
    <div v-if="profile">
      <div class="row justify-content-center">
        <div class="card m-0 p-0 shadow">
          <div class="card-header cover-img" :style="{backgroundImage: `url(${profile.coverImg})`}">
          </div>
          <div class="card-body">
            <img :src="profile.picture" alt="" class="rounded-circle mt-2 profile-picture" height="64"> 
          <p><b>{{ profile.name }}</b></p> <a :href="profile.resume"><i class="far fa-file-alt"></i></a> <a :href="profile.github"><i class="fab fa-github-square"></i></a> <a :href="profile.linkedin"><i class="fab fa-linkedin"></i></a>
            <p>{{ profile.bio }}</p>
            <p>Class of {{ profile.class }}</p>
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
</style>