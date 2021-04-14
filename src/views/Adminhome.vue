<template>
  <div class="home">
    <Adminhome/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Adminhome from '@/components/Adminhome.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    Adminhome,
  },
});
</script>
