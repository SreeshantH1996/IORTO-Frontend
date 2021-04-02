<template>
  <div class="home">
    <LogReg/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LogReg from '@/components/LogReg.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    LogReg,
  },
});
</script>
