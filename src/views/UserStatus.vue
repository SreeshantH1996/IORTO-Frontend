<template>
  <div class="home">
    <UserStatus/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserStatus from '@/components/UserStatus.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    UserStatus,
  },
});
</script>
