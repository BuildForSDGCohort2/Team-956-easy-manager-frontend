<template>
  <div class="container">
    <div class="tabs">
      <div class="tab">
        <input
          type="radio"
          name="css-tabs"
          id="tab-1"
          checked
          class="tab-switch"
        />
        <label for="tab-1" class="tab-label">Company Profile</label>
        <div class="tab-content">Content One</div>
      </div>

      <div class="tab">
        <input type="radio" name="css-tabs" id="tab-2" class="tab-switch" />
        <label for="tab-2" class="tab-label">Branch</label>
        <div class="tab-content">
          <div id="branch-display">
            <h3 class="inline-header">Manage Branches</h3>
            <div class="card">
              <div class="card-head">
                <span class="inline-header">
                  <span class="search-icon"
                    ><i class="fas fa-search"/></span
                  ><input type="text" class="input-search" />
                </span>

                <span class="float-right pt-1">
                  <label for="" class="label-btn-md" @click.prevent="addBranch">
                    <i class="fas fa-plus" /> Add Branch
                  </label>
                </span>
              </div>

              <div class="card-body">
                <form action="">
                  <table class="table table-hover mt-4">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Project</th>
                        <th scope="col">Start date</th>
                        <th scope="col">End date</th>
                        <th scope="col">Team</th>
                        <th scope="col">Work progress</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td><i class="fas fa-circle" /> Otto</td>
                        <td><i class="fas fa-ellipsis-v" /></td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>

          <div id="toggle-branch">
            <h3 class="inline-header">Add Branch</h3>
            <span class="float-right">
              <button
                for=""
                class="color-success strip-border"
                @click.prevent="backToBranch"
              >
                <i class="fas fa-arrow-left" /> back to Manage Branches
              </button>
            </span>
            <div class="card">
              <div class="card-body">
                <h3 class="error mt-2">{{ errormssg }}</h3>
                <form>
                  <div @click.prevent="clearError">
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
                    <label
                      class="float-right label-btn-md"
                      @click.prevent="onSubmit"
                    >
                      <span v-if="edit == false">Add user</span>
                      <span v-else>Edit user</span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tab">
        <input type="radio" name="css-tabs" id="tab-3" class="tab-switch" />
        <label for="tab-3" class="tab-label">File Folder</label>
        <div class="tab-content">
          <div id="file-display">
            <h3 class="inline-header">Manage Files</h3>
            <div class="card">
              <div class="card-head">
                <span class="inline-header">
                  <span class="search-icon"
                    ><i class="fas fa-search"/></span
                  ><input type="text" class="input-search" />
                </span>

                <span class="float-right pt-1">
                  <label for="" class="label-btn-md" @click.prevent="addFile">
                    <i class="fas fa-plus" /> Add File
                  </label>
                </span>
              </div>

              <div class="card-body">
                <form action="">
                  <table class="table table-hover mt-4">
                    <thead class="thead-light">
                      <tr>
                        <th scope="col">Project</th>
                        <th scope="col">Start date</th>
                        <th scope="col">End date</th>
                        <th scope="col">Team</th>
                        <th scope="col">Work progress</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Mark</td>
                        <td><i class="fas fa-circle" /> Otto</td>
                        <td><i class="fas fa-ellipsis-v" /></td>
                      </tr>
                    </tbody>
                  </table>
                </form>
              </div>
            </div>
          </div>

          <div id="toggle-file">
            <h3 class="inline-header">Add File</h3>
            <span class="float-right">
              <button
                for=""
                class="color-success strip-border"
                @click.prevent="backToFile"
              >
                <i class="fas fa-arrow-left" /> back to Manage Files
              </button>
            </span>
            <div class="card">
              <div class="card-body">
                <h3 class="error mt-2">{{ errormssg }}</h3>
                <form>
                  <div @click.prevent="clearError">
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
                    <label
                      class="float-right label-btn-md"
                      @click.prevent="onSubmit"
                    >
                      <span v-if="edit == false">Add user</span>
                      <span v-else>Edit user</span>
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tab">
        <input type="radio" name="css-tabs" id="tab-4" class="tab-switch" />
        <label for="tab-4" class="tab-label">Work flow</label>
        <div class="tab-content">Content four</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addBranch() {
      document.getElementById("toggle-branch").style.display = "block";
      document.getElementById("branch-display").style.display = "none";
    },
    backToBranch() {
      document.getElementById("toggle-branch").style.display = "none";
      document.getElementById("branch-display").style.display = "block";
    },
    addFile() {
      document.getElementById("toggle-file").style.display = "block";
      document.getElementById("file-display").style.display = "none";
    },
    backToFile() {
      document.getElementById("toggle-file").style.display = "none";
      document.getElementById("file-display").style.display = "block";
    }
  }
};
</script>
