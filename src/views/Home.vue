<template>
  <div class="home">
    <Slider/>
    <div></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Slider from '@/components/Slider.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    Slider,
    HelloWorld,
  }
}
</script>
