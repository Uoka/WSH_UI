<template>
  <div class="carousel-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'wsCarouselItem',
  methods: {
  }
}
</script>

<style scoped>
  .carousel-item {
    display: flex;
    justify-content: stretch;
    align-items: stretch;
  }
  .carousel-item:first-child{
    width: 100%;
    height: 100%;
  }
</style>
