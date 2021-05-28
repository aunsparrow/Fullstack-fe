<template lang="html">
  <nav>
    <p>nav</p>
  </nav>
</template>

<script>
import mainSectionJs from '/assets/js/mainNav.js'   
  export default {
    mixins: [mainSectionJs],
  }
</script>
<style scoped>
@import '~/assets/css/mainNav.css';
</style>