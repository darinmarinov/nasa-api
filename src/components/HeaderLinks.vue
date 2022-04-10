<script>
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router/index'
export default defineComponent({
  name: 'HeaderLinks',
  props: {
    to: { type: String, required: true },
    exact: { type: Boolean, default: false }
  },
  setup(props) {
    console.log(router)
    const route = useRoute()
    const active = computed(() =>
      props.exact ? route.path === props.to : route.path.startsWith(props.to)
    )
    return { active }
  }
})
</script>

<template>
  <div style="width: 150px">
    <router-link
      :to="to"
      class="nav-link"
      :class="active ? 'font-weight-bold' : null"
    >
      <slot />
    </router-link>
  </div>
</template>