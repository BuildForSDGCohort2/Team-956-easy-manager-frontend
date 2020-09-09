<template>
  <div class="container">
    <div class="mail-container">
      <div class="mail-bar">
        <div class="mail-logo-container">
          <i class="fas fa-envelope" /> Mail
        </div>
        <div class="mail-compose-button">
          <label class="compose-button" @click.prevent="compose">Compose</label>
        </div>
        <menu class="menu-segment">
          <ul class="mail-list">
            <li class="active">
              <a href="#">Inbox<span> (43)</span></a>
            </li>
            <li>Sent</li>
            <li>Drafts</li>
            <li>Trash</li>
          </ul>
        </menu>
      </div>
      <div class="mail-content">
        <div class="mail-content-header">
          <span class=" pt-1"> Inbox </span>
          <span class="float-right">
            <span class="mail-search-icon">
              <i class="fas fa-search" />
            </span>
            <input type="text" class="mail-input-search" />
          </span>
        </div>

        <hr class="hr" />

        <div id="mail-display">
          <table class="table table-borderless table-hover">
            <tbody>
              <tr>
                <div @click.prevent="mailContent">
                  <td>
                    <span class="dot"></span>
                  </td>
                  <td>
                    <input type="checkbox" id="chk1" />
                    <label for="chk1" class="toggle"></label>
                  </td>
                  <td>
                    <p class="title">Lucas Kriebel (via Twitter)</p>
                    <span
                      class="star-toggle glyphicon glyphicon-star-empty"
                    ></span>
                  </td>
                  <td>
                    <div class="subject">
                      Lucas Kriebel (@LucasKriebel) has sent you a direct
                      message on Twitter! &nbsp;&ndash;&nbsp;
                      <span class="teaser"
                        >@LucasKriebel - Very cool :) Nicklas, You have a new
                        direct message.</span
                      >
                    </div>
                  </td>
                  <td>
                    <div class="date">11:49 am</div>
                  </td>
                </div>
              </tr>
            </tbody>
          </table>
        </div>

        <div id="mail-content-display">
          <div class="card">
            <span class="float-right">
              <button
                for=""
                class="color-success strip-border"
                @click.prevent="backToMail"
              >
                <i class="fas fa-arrow-left" /> back to Mail
              </button>
            </span>
            <div class="card-body">
              
              
              <label
                class="float-right label-btn-md mt"
                @click.prevent="onSubmit"
                >Submit</label
              >
            </div>
          </div>
        </div>

        <div id="mail-composer">
          <div class="form-group">
            <label class="form-font mail-label">TO:</label>
            <input
              placeholder="Enter Lastname..."
              type="text"
              class="mail-form-control form-font"
            />
          </div>

          <div class="form-group">
            <label class="form-font mail-label">CC:</label>
            <input
              placeholder="Enter Lastname..."
              type="text"
              class="mail-form-control form-font"
            />
          </div>

          <div class="form-group">
            <label class="form-font mail-label">Subject:</label>
            <input
              placeholder="Enter Lastname..."
              type="text"
              class="mail-form-control form-font"
            />
          </div>

          
          <label class="float-right label-btn-md mt" @click.prevent="onSubmit"
            >Submit</label
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      
      html: "",
      url: [],
      files: []
    };
  },
  methods: {
    removeFile(fileKey) {
      this.url.splice(fileKey, 1);
      this.files.splice(fileKey, 1);
    },
    handleFileInput(e) {
      const files = e.target.files;
      if (!files) return;
      [...files].forEach(f => {
        this.files.push(f);
      });
      this.files.forEach(el => {
        return this.url.push({
          name: el.name,
          size: el.size,
          link: URL.createObjectURL(el)
        });
      });
    },
    compose() {
      const x = document.getElementById("mail-composer");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    mailContent() {
      document.getElementById("mail-content-display").style.display = "block";
      document.getElementById("mail-display").style.display = "none";
    },
    backToMail() {
      document.getElementById("mail-content-display").style.display = "none";
      document.getElementById("mail-display").style.display = "block";
    }
  }
};
</script>
