<template>
  <div class="container">
      <div class="row justify-content-center" v-if="account">
        <div class="card m-0 p-0 shadow">
          <div class="card-header cover-img" :style="{backgroundImage: `url(${account.coverImg})`}">
          </div>
          <div class="card-body">
            <img :src="account.picture" alt="" class="rounded-circle mt-2 profile-picture" height="64"> 
          <p><b>{{ account.name }}</b></p> <a :href="account.resume"><i class="far fa-file-alt"></i></a> <a :href="account.github"><i class="fab fa-github-square"></i></a> <a :href="account.linkedin"><i class="fab fa-linkedin"></i></a>
            <p>{{ account.bio }}</p>
            <p>Class of {{ account.class }}</p>
          </div>
        </div>
      
        <form @submit.prevent="updateAccount()">
          <p class="m-0 p-0">
          <small><em>Add/Edit Your Cover Image</em></small>
          </p>
          <input type="text" v-model="account.coverImg">
          <br />
          <p class="m-0 p-0">
           <small class="m-0 small-0"><em>Add/Edit Your Name</em></small>
           </p>
          <input type="text" v-model="account.name" smalllaceholder="Name">
            <br />
            <p class="m-0 p-0">
           <small><em>Add/Edit Your Profile Picture</em></small>
           </p>
          <input type="text" v-model="account.picture" placholder="Picture">
          <br />
          <p class="m-0 p-0">
          <small><em>Add/Edit Your Github Account</em></small>
          </p>
          <input type="text" v-model="account.github" placeholder="Github">
          <br />
          <p class="m-0 p-0">
           <small><em> Add/Edit Your Linked In</em></small>
           </p>
          <input type="text" v-model="account.linkedin" placeholder="Linkedin">
          <br />
          <p class="m-0 p-0">
           <small><em>Add/Edit Your Class</em></small>
           </p>
          <input type="text" v-model="account.class" placeholder="Class">
          <br />
          <p class="m-0 p-0">
          <small><em>Add/Edit If You Have Graduated</em></small>
          </p>
          <input type="checkbox" v-model="account.graduated" placeholder="Graduate">
          <br />
          <p class="m-0 p-0">
           <small><em>Add/Edit Your Bio</em></small>
           </p>
          <textarea v-model="account.bio"
                    type="text"
                    class="form-control"
                    name="body"
                    id="body"
                    rows="5"
                    placeholder="About you...">
          </textarea>
          <button class="btn btn-success mt-2">
            Submit
          </button>
        </form>
        </div>

    <div v-else>
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import Pop from '../utils/Pop'
import { accountService } from '../services/AccountService'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account),
      async updateAccount() {
        try {
          await accountService.editAccount(account.value)
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
  height: 30vh;
  background-position: center center;
}
</style>
