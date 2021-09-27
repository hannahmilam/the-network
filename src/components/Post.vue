<template>
<div class="col-md-10 p-3">
 <div class="card shadow" style="">
   <div class="on-hover position-absolute" style="right: 1rem; top: 1rem" v-if="account.id == post.creatorId">
       <i class="mdi mdi-delete f-20 selectable" @click="deletePost()"></i>
        </div>
        <div class="card-header bg-white">
          <div class="row">
            <div class="col-md-2">
            <router-link :to="{name: 'Profile', params: {id: post.creatorId}}" class="selectable">
              <img :src="post.creator.picture" alt="" class="rounded-circle mt-2" height="64">
             </router-link>
            </div>
            <div class="col-md-10 pt-3">
              <h6 class="m-0 p-0"><b>{{post.creator.name}}</b></h6>
              <small>
              {{ new Date(post.updatedAt).toDateString() }}
             </small>
            </div>
            <p class="card-text mt-3 caption">{{post.body}}</p>
          </div>
        </div>

          <div class="card-body m-0 p-0"  v-if="post.imgUrl">
            <img :src="post.imgUrl" class="rounded post-img" alt="...">
            </div>
          
        <div class="card-footer text-end">
        <p><i class="far fa-heart selectable text-danger" @click="likePost()"> {{ post.likes.length }}</i></p>
         </div>
         <!-- TODO make it so that when a user likes a post, it changes to a solid red heart, and when the user didn't like it then the heart is outlined -->
        <!-- <div class="card-footer text-end" v-else>
        <p class="mt-2"><i class="fas fa-heart selectable text-danger" @click="likePost()"> {{ post.likes.length }}</i></p>
        </div> -->

  </div>
</div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState.js'
import { postsService } from '../services/PostsService.js'
import Pop from '../utils/Pop.js'
import { logger } from '../utils/Logger.js'
import { Post } from '../models/Post'
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      posts: computed(() => AppState.posts),
      async deletePost() {
        try {
          const yes = await Pop.confirm('Are you sure you want to delete?')
          if(!yes){ return }
          await postsService.deletePost(props.post.id)
          Pop.toast('Your post is deleted', 'success')
        } catch (error) {
          Pop.toast('unable to delete post', 'error')
          logger.log(error)
        }
      },
      async likePost() {
    try {
      await postsService.likePost(props.post.id)
      Pop.toast('Liked!', 'success')
    } catch (error) {
      Pop.toast(error.message, 'error')
      logger.log(error, 'error')
    }
}
    }
  }
}
</script>

<style scoped lang="scss">
.post-img{
 width: 100%;
}
.caption{
  word-wrap: break-word;
}
</style>