<template lang="html">
  <section>
    <p>section</p>
    <Shop></Shop>
  </section>
</template>

<script>
import MainNav from '@/components/mainComponents/MainNav'
import MainArticle from '@/components/mainComponents/MainArticle'
import Shop from '@/components/shop/shop'
import mainSectionJs from '/assets/js/mainSection.js'   
  export default {
     component: [
       MainNav,MainArticle,Shop
       ]
  ,
    mixins: [mainSectionJs],
  }
</script>
<style scoped>
@import '~/assets/css/mainSection.css';
</style>
