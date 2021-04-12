<template>
  <div class="home">
    <DocumentList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DocumentList from '@/components/DocumentList.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    DocumentList,
  },
});
</script>
