export class Profile {
  constructor(profileData) {
    this.email = profileData.email
    this.name = profileData.name
    this.picture = profileData.picture
    this.bio = profileData.bio 
    this.coverImg = profileData.coverImg
    this.github = profileData.github
    this.linkedin = profileData.linkedin
    this.resume = profileData.resume
    this.class = profileData.class
    this.graduate = profileData.graduated
  }
}