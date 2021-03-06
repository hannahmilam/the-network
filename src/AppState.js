import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  account: {},
  search: [],

/** @type {import('.models/Post.js').Post[]} */
  posts: [],
  post: null,
  likes: [],
  user: {},
  account: {},
  postData: {},
  currentPage: 1,
  /**@type {import('.model/Ad.js').Ad[]} */
  ads: [],
  /**@type {import('.model/Profile.js').Profile} */
  profile: {},
})
