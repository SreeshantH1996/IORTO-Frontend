<template>
  <div class="home">
    <CreateLicence/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CreateLicence from '@/components/CreateLicence.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    CreateLicence,
  },
});
</script>
