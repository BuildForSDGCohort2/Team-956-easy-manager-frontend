import { createStore } from 'vuex'
import manageUsers from "./modules/manageUsers";

export default createStore({
  modules: {
    users: manageUsers
  }
});
