<template>
  <div class="container">
    <div id="form-display">
      <h3 class="inline-header">Manage Users</h3>
      <div class="card">
        <div class="card-head">
          <span class="inline-header">
            <span class="search-icon"><i class="fas fa-search"/></span
            ><input type="text" class="input-search" />
          </span>

          <span class="float-right pt-1">
            <label for="" class="label-btn-md" @click.prevent="addUser">
              <i class="fas fa-plus" /> Add Users
            </label>
          </span>
        </div>

        <div class="card-body">
          <form action="">
            <table class="table table-hover mt-4">
              <thead class="thead-light">
                <tr>
                  <th scope="col">S/no</th>
                  <th scope="col">Title</th>
                  <th scope="col">Name</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Deparment</th>
                  <th scope="col">Role</th>
                  <th scope="col">Status</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <th>{{user.id}}</th>
                  <td>{{user.title}}</td>
                  <td>{{user.first_name}} {{user.other_name}} {{user.last_name}}</td>
                  <td>{{user.gender}}</td>
                  <td>{{user.department}}</td>
                  <td>{{user.role}}</td>
                  <td><i class="fas fa-circle" />{{user.status}}</td>
                  <td><i class="fas fa-ellipsis-v" /></td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>

    <div id="toggle-form">
      <h3 class="inline-header">Add user</h3>
      <span class="float-right">
        <button
          for=""
          class="color-success strip-border"
          @click.prevent="backTo"
        >
          <i class="fas fa-arrow-left" /> back to Manage Users
        </button>
      </span>
      <div class="card">
        <div class="card-body">
          <h3 class="error mt-2">{{ errormssg }}</h3>
          <form>
            <div @click.prevent="clearError">
              <div class="form-row">
                <div>
                  <div>
                    <label class="form-font">Title</label>
                  </div>
                  <select name="" class="form-control form-font"> </select>
                </div>

                <div>
                  <div>
                    <label class="form-font">Gender</label>
                  </div>
                  <select name="" class="form-control form-font"></select>
                </div>
              </div>

              <div class="form-group">
                <div>
                  <label class="form-font">First Name</label>
                </div>
                <input
                  placeholder="Enter Lastname..."
                  type="text"
                  class="form-control form-font"
                />
              </div>

              <div class="form-group">
                <div>
                  <label class="form-font">Last Name</label>
                </div>
                <input
                  placeholder="Enter Lastname..."
                  type="text"
                  class="form-control form-font"
                />
              </div>

              <div class="form-group">
                <div>
                  <label class="form-font">Email</label>
                </div>
                <input
                  placeholder="Enter Email..."
                  type="email"
                  class="form-control form-font"
                />
              </div>

              <div class="form-row">
                <div>
                  <div>
                    <label class="form-font">Role</label>
                  </div>
                  <select name="" class="form-control form-font"></select>
                </div>

                <div>
                  <div>
                    <label class="form-font">Department</label>
                  </div>
                  <select name="" class="form-control form-font"></select>
                </div>
              </div>

              <div class="form-group">
                <div>
                  <label class="form-font">User default password</label>
                </div>
                <input
                  placeholder="Enter User default password..."
                  type="text"
                  class="form-control form-font"
                />
              </div>

              <div class="form-row">
                <div>
                  <!-- <button v-if="posts.status > 0" class="btn" @click.prevent="decrease">Deactivate</button>
                                    <button v-if="posts.status == 0" class="btn" @click.prevent="increase">Activate</button> -->
                </div>
                <div>
                  <!-- <span v-if="posts.status == 1">Activated</span>
                                    <span v-else-if="posts.status < 1">Deactivated</span> -->
                </div>
              </div>
            </div>

            <div class="form-group pb">
              <label class="float-right label-btn-md" @click.prevent="onSubmit">
                <span v-if="edit == false">Add user</span>
                <span v-else>Edit user</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  created(){
    this.$store.dispatch('get_user');
    console.log(this.users)
  },
  computed:{
    ...mapState({
      'users': state => state.users.users
      }),
  },
  methods: {
    addUser() {
      document.getElementById("toggle-form").style.display = "block";
      document.getElementById("form-display").style.display = "none";
    },
    backTo() {
      document.getElementById("toggle-form").style.display = "none";
      document.getElementById("form-display").style.display = "block";
    }
  }
};
</script>
