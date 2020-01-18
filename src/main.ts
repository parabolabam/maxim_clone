import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import VueFilterDateFormat from 'vue-filter-date-format'
import Modal from '@/components/Modal'
import * as validators from '@/modules/validation-service'

function validationProcess ({ binding, value, context, componentInstance }) {
  let validationResult = null
  debugger

  binding.value[0].forEach(validatorName => {
    validationResult = validators[validatorName](value)
  })

  if (!validationResult) {
    context.$emit('invalid')
    componentInstance.setErrorMessage(binding.value[1])
  } else {
    context.$emit('valid')
  }
}

Vue.component('modal', Modal)

Vue.use(VueFilterDateFormat, {
  dayOfWeekNames: [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'
  ],
  dayOfWeekNamesNamesShort: [
    'Su', 'Mo', 'Tu', 'We', 'Tr', 'Fr', 'Sa'
  ],
  monthNames: [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ],
  monthNamesShort: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ]
})

Vue.directive('validate', {
  bind (el, binding, { context, componentInstance }) {
    if (!Array.isArray(binding.value) || binding.value.length !== 2) {
      throw new Error('Please provide an array with two values: validator name and error message')
    }
    if (!Array.isArray(binding.value[0])) {
      throw new Error('Please provide an array of validators names')
    }
    el.querySelector('input').addEventListener('blur', ({ currentTarget: { value } }) => {
      validationProcess({ binding, value, context, componentInstance })
    })
  },
  unbind (el, binding) {
    el.querySelector('input').removeEventListener('blur')
  }
})

Vue.directive('animateOnElShow', {
  inViewport (el) {
    var rect = el.getBoundingClientRect()
    return !(rect.bottom < 0 || rect.right < 0 ||
             rect.left > window.innerWidth ||
             rect.top > window.innerHeight)
  },

  bind (el, binding) {
    el.classList.add('before-enter')
    el.$onScroll = function () {
      if (binding.def.inViewport(el)) {
        el.classList.add('enter')
        el.classList.add(binding.value)

        el.classList.remove('before-enter')
        binding.def.unbind(el, binding)
      }
    }
    document.addEventListener('scroll', el.$onScroll)
  },

  inserted (el, binding) {
    el.$onScroll()
  },

  unbind (el, binding) {
    document.removeEventListener('scroll', el.$onScroll)
    delete el.$onScroll
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
