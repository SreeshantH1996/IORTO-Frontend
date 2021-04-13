<template>
  <div class="home">
    <LicenceRenewal/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LicenceRenewal from '@/components/LicenceRenewal.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    LicenceRenewal,
  },
});
</script>
