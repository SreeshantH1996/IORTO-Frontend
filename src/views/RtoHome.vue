<template>
  <div class="home">
    <RtoHome/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RtoHome from '@/components/RtoHome.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    RtoHome,
  },
});
</script>
