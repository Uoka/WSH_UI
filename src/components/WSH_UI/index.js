import wshCarousel from '@/components/WSH_UI/carousel/index'
import wshCarouselItem from '@/components/WSH_UI/carouselItem/index'
import wshCol from '@/components/WSH_UI/col/index'
import wshInput from '@/components/WSH_UI/input/index'
import wshNavBar from '@/components/WSH_UI/navBar/index'
import wshNavItem from '@/components/WSH_UI/navItem/index'
import wshNavGroup from '@/components/WSH_UI/navGroup/index'
import whsPlayer from '@/components/WSH_UI/player/index'
import wshPopover from '@/components/WSH_UI/popover/index'
import wshRow from '@/components/WSH_UI/row/index'

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
