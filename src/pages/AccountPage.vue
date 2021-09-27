<template>
  <div class="container">
   <div class="row justify-content-center">
        <div class="card mt-3 p-0 shadow">
          <div class="card-header cover-img" :style="{backgroundImage: `url(${account.coverImg})`}">
            <img :src="account.picture" alt="" class="rounded-circle mt-2 profile-picture" height="150">
          </div>
          <div class="card-body">
        <div class="row mt-3">
            <div class="col-md-4 offset-8 text-end"> 
           <a :href="account.github" class="selectable">
          <img src="https://s3-alpha-sig.figma.com/img/20b5/5d38/484e62ac6ddb89ce44738dd9aa5f8b8a?Expires=1633305600&Signature=VvkZYHEjpRv6gajoSrJO~60KER~TmgVSWBrUS9phrRJd9vb1H~0SOdpVXnNj49DRQcutL6Ovn6laWvcqtQcyLiDWP5c9rtVvAUjit0V1Bn~XP07q8ptDcw3djTn1t-wsIaP5LUCJ49jEJf-13fwm3KDtPVVoikn0eLbGQm2cqEPoR19R-48paAU7kshbVN4D4JXhcB4iuq1DLwnPt16cNDn~0Mbyyc1RdUf4fYgO3Y9~jIc0hnJvHSJNj3E-zsPYlhqlBuGCwa6altb1pE2atOARYa5C8Rnc8gZIa8jkoBpJQ~DdhBSe8uOxO1dnBUGH~~QiSmcGhbJgHgrhcKRfQw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="github icon" class="images m-3">  
          </a>
      <a :href="account.linkedin" class="selectable"> 
      <img src="https://s3-alpha-sig.figma.com/img/c5fc/21c3/e02b76f63f0496bab55c6c3de1d32431?Expires=1633305600&Signature=J5TMXj2EENMW1oxvKL~psVwxTTOYxwg5PuWNGkvugGJKEWpcM0CGraO02XSuTf8KNO-pWsPnIGClQNyARX7CI-pfhh~CggNJHxnEV782POOexH-BGZjKjX18kp5OSoQDI2TwU51WrunmJy~f3f1LkxyCebSrpmKq7~TGM9IpHh5xUR-VO3~g55QpTZZf1GBdaCmYqz3xVQ1--LOVEnx4orcENer5K8LQF4isgczF2TGUQuHvkaezmooZ3PRjYKEBKyoRBnlDkMtMtB0xPbsCY84EKlYug-F28TpuK2h9EWCNmoDNdiA~JZKbm4zBYB5BXVoyMsAdCcApOoE-SZ3Uqw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="linked in icon" class="images m-3"> 
      </a>
      <a :href="account.resume" class="selectable">
      <img src="https://s3-alpha-sig.figma.com/img/0329/e39a/c555e9aaaec88598ce7a9d0f36807876?Expires=1633305600&Signature=VYbtbfOmRm3Zia~31wrOkzygksnBC-lGs6c1c5U7l~W~jQ2gzWDOTFEYh4cUK8zefNZEV8TAspYnTR~cixqpTz2ahAknvLlkcpS9wztZMNyNZDUzRKtEmkb5xF9Xg3xcP1XKki-ZsH4SEVLtLqpN5FVlbfn9NlPWj0tB7GJy~ZjR~Ya2Q5M7IJ~e9UewGBUrTd007ALk4n~EHbP7MYEk6l4snjLjFJ-~IBdCHDYoXA31Gbr1lGBoMauEaXWUEoSBDeZnkQDGapDFYMD0YuXtz1wniRJkp-uwyhnxD8nzKYh~leYnOzWHXLVlpaTiAlggwEbkvomVii6ClexnGiv5EQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="resume icon" class="images m-3"> 
       </a>
      </div>
      </div>
     <p class="text-secondary mb-0 pb-0"><small>{{ account.class }}</small></p>
          <h4 class="mt-0 pt-0"><b>{{ account.name }}</b></h4>
          <p>{{ account.bio }}</p>
          </div>
        </div>
      </div>


      <div class="row" v-if="account">
        <form @submit.prevent="updateAccount()">
          <p class="m-0 p-0">
          <small><em>Add/Edit Your Cover Image</em></small>
          </p>
          <input type="text" v-model="editable.coverImg" placeholder="Cover Image">
          <br />
          <p class="m-0 p-0">
           <small class="m-0 small-0"><em>Add/Edit Your Name</em></small>
           </p>
          <input type="text" v-model="editable.name" placeholder="Name">
            <br />
            <p class="m-0 p-0">
           <small><em>Add/Edit Your Profile Picture</em></small>
           </p>
          <input type="text" v-model="editable.picture" placeholder="Profile Picture">
          <br />
          <p class="m-0 p-0">
          <small><em>Add/Edit Your Github Account</em></small>
          </p>
          <input type="text" v-model="editable.github" placeholder="Github">
          <br />
          <p class="m-0 p-0">
           <small><em> Add/Edit Your Linked In</em></small>
           </p>
          <input type="text" v-model="editable.linkedin" placeholder="Linkedin">
          <br />
          <p class="m-0 p-0">
           <small><em> Add/Edit Your Resume</em></small>
           </p>
          <input type="text" v-model="editable.resume" placeholder="Resume">
          <br />
          <p class="m-0 p-0">
           <small><em>Add/Edit Your Class</em></small>
           </p>
          <input type="text" v-model="editable.class" placeholder="Class">
          <br />
          <p class="m-0 p-0">
          <small><em>Add/Edit If You Have Graduated</em></small>
          </p>
          <input type="checkbox" v-model="editable.graduated" placeholder="Graduate">
          <br />
          <p class="m-0 p-0">
           <small><em>Add/Edit Your Bio</em></small>
           </p>
          <textarea v-model="editable.bio"
                    type="text"
                    class="form-control"
                    name="body"
                    id="body"
                    rows="5"
                    placeholder="About you...">
          </textarea>
          <button class="btn m-1 selectable">
            Submit
          </button>
        </form>
        </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { accountService } from '../services/AccountService'
import { Post } from '../models/Post'

export default {
  name: 'Account',
  setup() {
    const account = computed(() => AppState.account)
    const editable = ref({})
      watchEffect(() => {
        editable.value = {...account.value}
      })

    return {
      account,
      editable,
      async updateAccount() {
        try {
          editable.value.id
          await accountService.editAccount(editable.value)
          Pop.toast('Profile Updated!', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style scoped>
.cover-img{
  height: 25vh;
  background-position: center center;
}

.profile-picture{
position: relative;
bottom: -5em;
border: solid #DAC4C7;
}

.images{
  height: 20px;
}
a{
  color: rgb(27, 26, 26);
}
.btn{
  background-color: #aba0cea1;
  backdrop-filter: blur(10px);
}
</style>
