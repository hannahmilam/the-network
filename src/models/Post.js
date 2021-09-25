export class Post{
  constructor(postData){
this.id = postData.id
this.body = postData.body
this.imgUrl = postData.imgUrl || {}
this.likes = postData.likes
this.likeIds = postData.likeIds
this.creatorId = postData.creatorId
this.creator = postData.creator || {}
this.picture = postData.creator.picture
this.updatedAt = postData.updatedAt
  }
}