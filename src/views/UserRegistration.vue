<template>
  <div class="home">
    <UserRegistration/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserRegistration from '@/components/UserRegistration.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    UserRegistration,
  },
});
</script>
