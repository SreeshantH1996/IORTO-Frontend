<template>
  <div class="home">
    <NewUserStatus/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import NewUserStatus from '@/components/NewUserStatus.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    NewUserStatus,
  },
});
</script>
