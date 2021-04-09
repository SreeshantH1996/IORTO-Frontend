<template>
  <div class="home">
    <UserHome/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserHome from '@/components/UserHome.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    UserHome,
  },
});
</script>
