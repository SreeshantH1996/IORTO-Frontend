<template>
  <div class="home">
    <UserList/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import UserList from '@/components/UserList.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    UserList,
  },
});
</script>
