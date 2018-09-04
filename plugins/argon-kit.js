import Vue from 'vue'
import globalDirectives from './globalDirectives'
import VueLazyload from 'vue-lazyload'
import Badge from '~/components/Badge'
import BaseAlert from '~/components/BaseAlert'
import BaseNav from '~/components/BaseNav'
import BaseDropdown from "~/components/BaseDropdown"
import CloseButton from "~/components/CloseButton"
import BaseButton from '~/components/BaseButton'
import BaseCheckbox from '~/components/BaseCheckbox'
import BaseInput from '~/components/BaseInput'
import BasePagination from '~/components/BasePagination'
import BaseProgress from '~/components/BaseProgress'
import BaseRadio from '~/components/BaseRadio'
import BaseSlider from '~/components/BaseSlider'
import BaseSwitch from '~/components/BaseSwitch'
import Card from '~/components/Card'
import Icon from '~/components/Icon'
import Hero from '~/components/Hero'


Vue.use(globalDirectives)
Vue.use(VueLazyload)

Vue.component(BaseNav.name, BaseNav)
Vue.component(Hero.name, Hero)
Vue.component(BaseDropdown.name, BaseDropdown)
Vue.component(CloseButton.name, CloseButton)
Vue.component(Badge.name, Badge)
Vue.component(BaseAlert.name, BaseAlert)
Vue.component(BaseButton.name, BaseButton)
Vue.component(BaseInput.name, BaseInput)
Vue.component(BaseCheckbox.name, BaseCheckbox)
Vue.component(BasePagination.name, BasePagination)
Vue.component(BaseProgress.name, BaseProgress)
Vue.component(BaseRadio.name, BaseRadio)
Vue.component(BaseSlider.name, BaseSlider)
Vue.component(BaseSwitch.name, BaseSwitch)
Vue.component(Card.name, Card)
Vue.component(Icon.name, Icon)
