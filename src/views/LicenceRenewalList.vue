<template>
  <div class="home">
    <LicenceRenewalList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LicenceRenewalList from '@/components/LicenceRenewalList.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    LicenceRenewalList,
  },
});
</script>
