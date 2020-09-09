<template>
  <div class="login-wrapper">
    <div class="login-inner-wrapper">
      <div class="login-header">
        <span id="h3">Sign In</span> <br />
        <span id="p">Please fill in your login credentials below</span>
      </div>

      <form action="">
        <div class="login-form-control">
          <div>
            <p>Username</p>
          </div>
          <div>
            <input
              type="text"
              class="input-login-control"
              v-model="credential.username"
              id="element_id"
            />
          </div>
        </div>

        <div class="login-form-control pass">
          <div>
            <p>Password</p>
          </div>
          <div>
            <input
              type="password"
              class="input-login-control"
              v-model="credential.password"
            />
          </div>
        </div>

        <div class="terms">
          <input type="checkbox" name="" id="" /><span id="terms"
            >I accept <b>terms and conditions</b> &
            <b>privacy policies</b></span
          >
        </div>

        <div>
          <button type="submit" class="button-control">LOGIN</button>
        </div>

        <div class="end-note">
          <span>Courtesy: moab consult resource</span>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      credential: { username: "", password: "" }
    };
  },
  watch: {
    listener: function() {
      document.getElementById("element_id").onchange = function() {
        document.getElementById("ss").style.display = "block";
      };
    }
  },
  methods: {}
};
</script>
