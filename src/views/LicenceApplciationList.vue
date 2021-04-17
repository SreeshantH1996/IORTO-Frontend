<template>
  <div class="home">
    <LicenceApplciationList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LicenceApplciationList from '@/components/LicenceApplciationList.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    LicenceApplciationList,
  },
});
</script>
