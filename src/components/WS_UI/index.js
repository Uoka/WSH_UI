import wshCarousel from '@/components/WS_UI/carousel/index'
import wshCarouselItem from '@/components/WS_UI/carouselItem/index'
import wshCol from '@/components/WS_UI/col/index'
import wshInput from '@/components/WS_UI/input/index'
import wshNavBar from '@/components/WS_UI/navBar/index'
import wshNavItem from '@/components/WS_UI/navItem/index'
import wshNavGroup from '@/components/WS_UI/navGroup/index'
import whsPlayer from '@/components/WS_UI/player/index'
import wshPopover from '@/components/WS_UI/popover/index'
import wshRow from '@/components/WS_UI/row/index'

const components = [
  wshCarousel,
  wshCarouselItem,
  wshCol,
  wshInput,
  wshNavBar,
  wshNavGroup,
  wshNavItem,
  whsPlayer,
  wshPopover,
  wshRow
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  wshNavBar,
  wshNavItem,
  wshRow,
  wshCol,
  wshInput
}
