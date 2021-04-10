<template>
  <div class="home">
    <NewLicence/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NewLicence from '@/components/NewLicence.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    NewLicence,
  },
});
</script>
