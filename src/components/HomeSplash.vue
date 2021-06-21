<template>
  <div class="homesplash container">
    <div class="row justify-content-around">
      <div class="col">
        <CardLink msg="Horse Powered Reading" linkTo="/HorsePoweredReading" image="https://place-hold.it/300x500">
        </CardLink>
      </div>
      <div class="col">
        <CardLink msg="Bucky's Soap" linkTo="/BuckysSoap" image="https://place-hold.it/300x500"></CardLink>
      </div>
      <div class="col">
        <CardLink msg="Barn Art" linkTo="/BarnArt" image="https://place-hold.it/300x500"></CardLink>
      </div>
      <div class="col">
        <CardLink msg="Our Team" linkTo="/OurTeam" image="https://place-hold.it/300x500"></CardLink>
      </div>

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