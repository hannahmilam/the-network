import { AppState } from "../AppState"
import { Post } from "../models/Post"
import { logger } from "../utils/Logger"
import { convertToQuery } from "../utils/Query"
import { api } from "./AxiosService"

class PostsService{

  async getPosts(query = {}) {
    AppState.posts = []
    const res = await api.get('api/posts' + convertToQuery(query))
    logger.log(res.data.posts)
    AppState.posts = res.data.posts.map(p => new Post(p))
  }
async createPost(newPost){
  let res = await api.post('api/posts', newPost)
  logger.log('create post', res)
  AppState.posts.unshift(new Post(res.data))
}
}
export const postsService = new PostsService()