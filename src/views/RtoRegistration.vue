<template>
  <div class="home">
    <RtoRegistration/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RtoRegistration from '@/components/RtoRegistration.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    RtoRegistration,
  },
});
</script>
