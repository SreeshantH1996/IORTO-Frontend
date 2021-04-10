<template>
  <div class="home">
    <UploadDocuments/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UploadDocuments from '@/components/UploadDocuments.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    UploadDocuments,
  },
});
</script>
