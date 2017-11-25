<template>
  <div id="app">
   <head-bar></head-bar>
    <router-view class="main-app clearfix"></router-view>
  </div>
</template>

<script>
  import headBar from '@/components/headBar.vue'
export default {
    components: {
      headBar
    }
}
</script>

<style lang="scss">
@import "mian.scss";
#app {


}
</style>
