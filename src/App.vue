<template>
  <div id="app">
    <tool></tool>
    <router-view></router-view>
  </div>
</template>
<script>
import tool from '../src/views/tool'

export default {
  data:function() {
    return {

    };
},
  components:{
    tool
  }

}
</script>
<style>

</style>
