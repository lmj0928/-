<template>
  <div id="app">
<keep-alive>
  <router-view/>
</keep-alive>

  </div>
</template>

<script>
import request from './utils/request';
import axios from 'axios'
export default {
  name: 'App',
  created(){

  }
}
</script>

<style lang="scss" scoped>
@import './static/scss/_minix.scss';
@import './static/scss/common.scss';
*{
  padding: 0;
  list-style: none;
  text-decoration: none;
  margin: 0;
  box-sizing: border-box;
}
body,html{
  width: 100%;
  height: 100%;
}
#app{
  width: 100%;
  height: 100%;
  font-size: pxTorem(16px);
}
</style>
