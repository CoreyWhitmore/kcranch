<template>
  <div class="homesplash">


    <div class="row justify-content-around">
      <CardLink msg="Horse Powered Reading" linkTo="/HorsePoweredReading" image="https://place-hold.it/300x500">
      </CardLink>
      <CardLink msg="Bucky's Soap" linkTo="/BuckysSoap" image="https://place-hold.it/300x500"></CardLink>
      <CardLink msg="Barn Art" linkTo="/BarnArt" image="https://place-hold.it/300x500"></CardLink>
      <CardLink msg="Our Team" linkTo="/OurTeam" image="https://place-hold.it/300x500"></CardLink>
    </div>


  </div>
</template>

<script>
  import CardLink from '@/components/CardLink.vue'

  export default {
    name: 'HomeSplash',
    components: {
      CardLink
    }
  }
</script>