<template>
  <div class="home">
    <Payment/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Payment from '@/components/Payment.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    Payment,
  },
});
</script>
