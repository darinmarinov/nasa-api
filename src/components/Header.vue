<template>
  <v-card class="mx-auto">
    <v-layout>
      <v-app-bar color="primary">
        <v-list class="d-flex flex-row nav-menu">
          <v-list-item
            color="rgba(255,255,255,0.2)"
            active-color="orange"
            v-for="(route, i) in menu"
            :key="i"
            :class="['nav-menu__item', route.children ? 'has-dynamic' : '']"
            :to="{ name: route.name }"
          >
              <HeaderLinks :to="route.path" exact> {{ route.name }} </HeaderLinks>
          </v-list-item>
        </v-list>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
  import { menu } from '@/router/index'

  import { defineComponent } from 'vue'
  import HeaderLinks from '@/components/HeaderLinks.vue'

  export default defineComponent({
    name: 'Header',
    components: {
      HeaderLinks,
    },
  data() {
    return { menu: menu }
  },
  created() {
  },
})
</script>
<style>
.nav-menu .nav-link {
  color: #fff;
  text-transform: capitalize;
  text-decoration: none;
}
.v-app-bar--density-default .v-app-bar__content {
  justify-content: center;
}
.v-list--density-default.v-list--one-line .v-list-item {
  text-align: center;
}
</style>
