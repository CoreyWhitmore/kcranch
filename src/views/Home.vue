<template>
  <div class="home">
    <HomeSplash />
  </div>
</template>

<script>
  // @ is an alias to /src
  import HomeSplash from '@/components/HomeSplash.vue'

  export default {
    name: 'Home',
    components: {
      HomeSplash
    }
  }
</script>