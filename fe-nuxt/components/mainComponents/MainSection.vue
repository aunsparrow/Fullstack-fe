<template lang="html">
  <section>
    <Shop></Shop>
    <Product></Product>
    <MainFooter></MainFooter>
  </section>
</template>

<script>
import MainNav from '@/components/mainComponents/MainNav'
import MainArticle from '@/components/mainComponents/MainArticle'
import Shop from '@/components/shop/shop'
import Product from '@/components/product/product'
import mainSectionJs from '/assets/js/mainSection.js' 
import MainFooter from '@/components/mainComponents/MainFooter'  
  export default {
     component: [
       MainNav,MainArticle,Shop,Product,MainFooter
       ]
  ,
    mixins: [mainSectionJs],
  }
</script>
<style scoped>
@import '~/assets/css/mainSection.css';
</style>
