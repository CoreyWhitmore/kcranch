<template>
  <div class="homesplash">

    <div class="row justify-content-center">
      <router-link to="/HorsePoweredReading">
        <h4>Horse Powered Reading</h4>
      </router-link>
    </div>
    <div class="row justify-content-center">
      <router-link to="/BuckysSoap">
        <h4>Bucky's Soap</h4>
      </router-link>

    </div>
    <div class="row justify-content-center">
      <router-link to="/BarnArt">
        <h4>Barn Art</h4>
      </router-link>

    </div>
    <div class="row justify-content-center">
      <router-link to="/OurTeam">
        <h4>Our Team</h4>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeSplash',
  }
</script>