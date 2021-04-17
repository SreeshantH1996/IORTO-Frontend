<template>
  <div class="home">
    <RenewalApplicationDetails/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RenewalApplicationDetails from '@/components/RenewalApplicationDetails.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    RenewalApplicationDetails,
  },
});
</script>
