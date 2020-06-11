<template>
  <div id="app">
    <AppFooter/>
    <router-view/>
    <AppNavbar/>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import AppFooter from '@/components/AppFooter.vue'
import AppNavbar from '@/components/AppNavbar.vue'

/**
 * this is how you create a component inside vue.js using ts
 */
@Component({
  components: {
    AppFooter, AppNavbar
  }
})
export default class App extends Vue {

}
</script>

<style>
</style>
