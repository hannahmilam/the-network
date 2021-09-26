<template>
  <div v-if="pagepost.newer !== null">
    <button class="btn btn-light" @click="decrease">
      ‹ Newer
    </button>
  </div>
  <div v-if="page.older !== null">
    <p class="selectable" @click="increase">
      Older ›
    </p>
  </div>
</template>

<script>
import { postsService } from '../services/PostsService'
import { logger } from '../utils/Logger'
let i = 1
export default {
  props: {
    page: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      async next() {
        i++
        await postsService.getPage(i)
      },
      async previous() {
        i--
        await postsService.getPage(i)
        logger.log(i)
      }
    }
  }
}
</script>

<style>

</style>