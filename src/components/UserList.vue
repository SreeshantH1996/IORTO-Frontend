<template>
  <div>
    <div class="cont">
      <div style="margin: 7%; margin-bottom: 13%">
        <h3>All User List</h3>
        <div>
          <table id="user_list" class="table" style="text-align: left;margin-top:4%;">
            <thead>
              <tr>
                <th scope="col">User ID</th>
                <th scope="col">User Name</th>
                <th scope="col">District</th>
                <th scope="col">Phone number</th>
                <th scope="col">New Application Status</th>
                <th scope="col">Renewal Application Status</th>
                <!-- <th scope="col">More details</th> -->
              </tr>
            </thead>
            <tbody>
            <tr v-for="user in UserData" v-bind:key="user.id">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.district }}</td>
              <td>{{ user.phnumber }}</td>
              <td><b style="color:red">{{ user.user_status }}</b></td>
              <td><b style="color:red">{{ user.renewal_status }}</b></td>

              <!-- <td>
                <a
                  v-bind:href="
                    'http://localhost:8000' + user.id
                  "
                  target="__blank"
                  >click here</a
                >
              </td> -->
            </tr>
          </tbody>
          </table>
        </div>
        <div class="row" style="margin-top: 2%; margin-bottom: 2%;">
              <div class="col-6" style="text-align: left">
                <a href="/#/rtohome">
                  <button type="button" class="btn btn-lg btn-primary">
                    Back
                  </button>
                </a>
              </div>
            </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="../ts/UserList.ts"></script>
<style scoped src="../css/UserList.css"></style>        