<template>
  <div class="container">
    <h3 class="inline-header">Dashboard</h3>
    <div class="first-col">
      <div class="first-row">
        <div class="card max-height-1">
          <div class="card-head">
            <span class="inline-header">Project Summary</span>
            <i class="fas fa-ellipsis-h float-right" />
          </div>
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
                <td><i class="fas fa-circle"></i> Otto</td>
                <td><i class="fas fa-ellipsis-v"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="second-row">
        <div class="top-col">
          <div class="card ">
            <table>
              <tr class="tr">
                <th class="th">
                  <i class="fas fa-address-book"></i>
                </th>
                <td class="td">
                  <div>
                    <span>186</span><br />
                    <span>Profile update request</span>
                  </div>
                </td>
              </tr>
              <tr class="tr">
                <th class="th">
                  <i class="fas fa-calendar" size="3x" />
                </th>
                <td class="td">
                  <span>186</span><br />
                  <span>Profile update request</span>
                </td>
              </tr>
              <tr>
                <th class="th">
                  <i class="fas fa-user-circle" size="3x" />
                </th>
                <td class="td">
                  <span>186</span><br />
                  <span>Profile update request</span>
                </td>
              </tr>
            </table>
          </div>
        </div>

        <div class="bottom-col">
          <div class="card bg-light">
            <table>
              <tr>
                <th class="th-top"><img class="avatar" /></th>
                <td>
                  <span>Abdulrasak Abdulkadir</span><br />
                  <span>Birthday Today</span><br /><br /><br />
                  <label class="label-btn-md">
                    <i class="fas fa-gift"></i> Wish Him
                  </label>
                  <label class="float-right mt-5">
                    More
                  </label>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="second-col mt-4">
      <div class="col">
        <div class="card max-height-2">
          <div class="card-head">
            <span class="inline-header">My Calendar</span>
            <i class="fas fa-ellipsis-h float-right"></i>
          </div>
          <div class="card-body">
            <div id="dtgh">
              <div id="date-circle"></div>
              <span id="day">day</span>
            </div>

            <div class="project-view mt-4">
              <div class="ml">
                <span>project name</span><br />
                <span>discription</span><br />
                <span>date</span>
              </div>
              <div class="mr">
                <i class="ellipsis-v float-right" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card max-height-2">
          <div class="card-head">
            <span class="inline-header">Task Pogress</span>
            <i class="fas fa-ellipsis-h float-right"></i>
          </div>
          <div class="card-body">
            <div class="row-dual">
              <div class="pt">
                <span>43</span><br />
                <span>Total Task</span>
              </div>
              <div class="mt-r">
                <span class="float-right mr-2">43</span><br />
                <span class="float-right mr-2">Task Completed</span>
              </div>
            </div>
            <!-- graph here -->
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card max-height-2">
          <div class="card-head">
            <span class="inline-header">Holiday / Absent</span>
            <i class="fas fa-ellipsis-h float-right" />
          </div>
          <div class="card-body">
            <table>
              <tr class="">
                <th class="th"><img class="avatar" /></th>
                <td class="td">
                  <span>Aubameyang Boma</span><br />
                  <span>Sick</span>
                </td>
                <td>duration</td>
              </tr>

              <tr class="">
                <th class="th"><img class="avatar" /></th>
                <td class="td">
                  <span>Aubameyang Boma</span><br />
                  <span>On Leave</span>
                </td>
                <td>duration</td>
              </tr>

              <tr class="">
                <th class="th"><img class="avatar" /></th>
                <td class="td">
                  <span>Aubameyang Boma</span><br />
                  <span>Absent</span>
                </td>
                <td>duration</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="third-col mt-4">
      <div class="col">
        <div class="card max-height-2">
          <div class="card-head">
            <span class="inline-header">Employee Gender</span>
            <i class="fas fa-ellipsis-h float-right"></i>
          </div>
          <div class="card-body">
            <div class="project-view mt-4">
              <div id="chart">
                <!-- graph here -->
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card max-height-2">
          <div class="card-head">
            <span class="inline-header">Team Member</span>
            <i class="fas fa-ellipsis-h float-right" />
          </div>
          <div class="card-body">
            <div>
              <span>23</span><br />
              <span>Total team member</span>
            </div>
            <div>
              <table>
                <tr class="tr">
                  <td class="td">
                    <span>Aubameyang Boma</span><br />
                    <span>Work at home</span>
                  </td>
                  <td><img class="avatar" /></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card max-height-2">
          <div class="card-head">
            <span class="inline-header">Remote Work</span>
            <i class="fas fa-ellipsis-h float-right"></i>
          </div>
          <div class="card-body">
            <table>
              <tr class="">
                <th class="th"><img class="avatar" /></th>
                <td class="td">
                  <span>Aubameyang Boma</span><br />
                  <span>Sick</span>
                </td>
                <td>duration</td>
              </tr>

              <tr class="">
                <th class="th"><img class="avatar" /></th>
                <td class="td">
                  <span>Aubameyang Boma</span><br />
                  <span>On Leave</span>
                </td>
                <td>duration</td>
              </tr>

              <tr class="">
                <th class="th"><img class="avatar" /></th>
                <td class="td">
                  <span>Aubameyang Boma</span><br />
                  <span>Absent</span>
                </td>
                <td>duration</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    } 
  }
};
</script>
