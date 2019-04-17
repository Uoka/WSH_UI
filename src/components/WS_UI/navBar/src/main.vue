<template>
  <transition>
    <div @mouseenter="mouserEnterFun"
         @mouseleave="mouserLeaveFun"
         class="wsh-nav-bar-main"
         :style="{width: mode === 'h'? XLength: YLength,
                height: mode === 'v'? XLength: YLength,
                  flexDirection: mode==='v'?'column':''}">
      <div class="wsh-nav-bar-bkgd"
           :style="{backgroundColor: bkgdColor,
                opacity: bkgdOpacity}"></div>
      <div class="wsh-nav-bar-first"
           :style="{flexDirection: mode==='v'?'column':'',
                    width: mode==='v'?'100%':'',
                    height: mode==='h'?'100%':''}">
        <slot name="navFirst"></slot>
      </div>
      <div class="wsh-nav-bar-center"
           :style="{flexDirection: mode==='v'?'column':'',
                    width: mode==='v'?'100%':'',
                    height: mode==='h'?'100%':''}">
        <slot></slot>
      </div>
      <div class="wsh-nav-bar-last"
           :style="{flexDirection: mode==='v'?'column':'',
                    width: mode==='v'?'100%':'',
                    height: mode==='h'?'100%':''}">
        <slot name="navLast"></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'wsNavBar',
  props: {
    XLength: {
      /* 设置导航栏宽度 */
      type: String,
      default: '100%'
    },
    YLength: {
      /* 设置导航栏高度 */
      type: String,
      default: '50px'
    },
    bkgdColor: {
      /* 设置导航栏背景颜色 */
      type: String,
      default: '#e9e9e9'
    },
    bkgdOpacity: {
      /* 设置导航栏背景透明度 */
      type: String,
      default: '1'
    },
    mode: {
      /* 设置模式 h为横向， v为纵向 */
      type: String,
      default: 'h'
    }
  },
  data () {
    return {
      mouseIn: false
    }
  },
  methods: {
    mouserEnterFun () {
      this.mouseIn = true
    },
    mouserLeaveFun () {
      this.mouseIn = false
    }
  }
}
</script>

<style scoped>
  .wsh-nav-bar-main {
    display: flex;
    justify-content: center;
    align-items: stretch;
    position: relative;
  }

  .wsh-nav-bar-first {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    justify-content: stretch;
  }

  .wsh-nav-bar-center {
    position: relative;
    display: flex;
    justify-content: stretch;
  }

  .wsh-nav-bar-last {
    right: 0;
    bottom: 0;
    position: absolute;
    display: flex;
    justify-content: stretch;
  }

  .wsh-nav-bar-bkgd {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>
