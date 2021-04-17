<template>
  <div class="home">
    <LicenceApplicationDetials/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LicenceApplicationDetials from '@/components/LicenceApplicationDetials.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    LicenceApplicationDetials,
  },
});
</script>
