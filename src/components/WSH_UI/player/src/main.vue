<template>
  <div>
    <video :height="height" controls>
      <source :src="videoSrc" type="video/mp4">
    </video>
  </div>
</template>

<script>
export default {
  name: 'wshPlayer',
  props: {
    width: {
      /* 设置组件的宽度 */
      type: String,
      default: '704px'
    },
    height: {
      /* 设置组件的高度 */
      type: String,
      default: '480px'
    },
    videoSrc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
