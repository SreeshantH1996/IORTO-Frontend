<template>
  <div class="home">
    <RenewalUploadDocument/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import RenewalUploadDocument from '@/components/RenewalUploadDocument.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    RenewalUploadDocument,
  },
});
</script>
