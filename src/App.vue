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
@import '@/assets/style.css';
</style>
