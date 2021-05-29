<template>
  <div>
    <MainHeader />
    <Nuxt />
    <div class="clearfix"></div>
  </div>
</template>

<script>
import MainNav from '@/components/mainComponents/MainNav'
import MainHeader from '@/components/mainComponents/MainHeader'
import MainFooter from '@/components/mainComponents/MainFooter'
export default {
  component: {
    MainHeader,MainFooter,MainNav
  }
}
</script>

<style>
</style>
