<template>
  <div class="sidebar bg-white hidden-text ps-3">
<div>
  <Auth />
</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

 @media only screen and (max-width: 768px) {
     .hidden-text {
       display: none;
     }
 }
  .sidebar{
   font-family: 'Inter', sans-serif;
  }
</style>
