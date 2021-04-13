<template>
  <div class="home">
    <LicenceRenewalForm/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LicenceRenewalForm from '@/components/LicenceRenewalForm.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    LicenceRenewalForm,
  },
});
</script>
