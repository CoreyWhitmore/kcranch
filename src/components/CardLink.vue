<template>
  <div class="CardLink">
    <router-link :to="linkTo">
      <div class="card bg-dark text-white">
        <img class="card-img" :src="image" alt="Card image">
        <div class="card-img-overlay">
          <h5 class="card-title">{{ msg }}</h5>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CardLink',
    props: {
      msg: String,
      linkTo: String,
      image: String,
    }
  }
</script>