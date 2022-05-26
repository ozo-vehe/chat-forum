<template>
  <TheNavigation />
  <router-view />
</template>

<script>
import TheNavigation from '@/components/TheNavigation'

export default {
  name: 'App',
  components: { TheNavigation }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');

  body {
    font-size: 16px;
    font-family: 'Lato';
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    background: #fcfcfc;
  }
  h1, h2 {
    font-weight: 300;
  }
</style>
