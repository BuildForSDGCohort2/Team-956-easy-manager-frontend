<template>
  <div class="wrapper" id="wrapper">
    <nav id="sidebar">
      <div id="sidebar-header">
        <h3 id="header">Easymanager</h3>
      </div>

      <ul id="nav-item">
        <li class="nav-link">
          <i class="fas fa-tachometer-alt"></i>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>

        <li class="nav-link">
          <i class="fas fa-users"></i>
          <router-link to="/users">Users</router-link>
        </li>

        <li class="nav-link">
          <i class="fas fa-envelope"></i>
          <router-link to="/mail">Mail</router-link>
        </li>

        <li class="nav-link">
          <i class="fas fa-cogs"></i>
          <router-link to="/setup">Setup</router-link>
        </li>
      </ul>
    </nav>

    <div id="content">
      <div id="content-header">
        <div id="content-inner-header">
          <div id="side-toggler">
            <button
              type="button"
              @click.prevent="sidebarCollapse"
              id="close-sidebar"
            >
              <i class="fas fa-times"></i>
            </button>
            <button
              type="button"
              @click.prevent="sidebarOpen"
              class="sidebarOpen"
              id="open-sidebar"
            >
              <i class="fas fa-bars"></i>
            </button>
          </div>

          <div id="topbar-item">
            <div id="notifier">
              <i class="fas fa-bell"></i>
            </div>

            <div id="dropdown">
              <span @click.prevent="dropdown">
                <img id="img-display" />
                <i class="fas fa-caret-down" id="caret"></i>
              </span>
              <div id="drop">
                <ul id="dropcontent">
                  <li><router-link to="/profile">Profile</router-link></li>
                  <li @click.prevent="logout()">logout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="clearfix"></div>

      <div id="content-body">
        <router-view name="routeA"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    dropdown() {
      const x = document.getElementById("drop");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
      console.log("iloverr");
    },
    sidebarCollapse() {
      const x = document.getElementById("content");
      x.classList.add("active");
      const y = document.getElementById("content-header");
      y.classList.add("active");
      const z = document.getElementById("content-body");
      z.classList.add("active");
      document.getElementById("sidebar").style.display = "none";
      document.getElementById("close-sidebar").style.display = "none";
      document.getElementById("open-sidebar").style.display = "block";
    },
    sidebarOpen() {
      document.getElementById("sidebar").style.display = "block";
      const x = document.getElementById("content");
      x.classList.remove("active");
      const y = document.getElementById("content-header");
      y.classList.remove("active");
      const z = document.getElementById("content-body");
      z.classList.remove("active");
      document.getElementById("open-sidebar").style.display = "none";
      document.getElementById("close-sidebar").style.display = "block";
    }
  }
};
</script>
<style lang="scss"></style>
