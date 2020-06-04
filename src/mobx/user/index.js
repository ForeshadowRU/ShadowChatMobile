import { observable } from "mobx";

let index = 0;

class UserStore {
  @observable userStore = {
    token: null,
    firstname: null,
    lastname: null,
  };

  setToken(token) {
    this.userStore = { ...this.userStore, token };
  }

  setData(data) {
    this.userStore = { ...data, token: this.UserStore.token };
  }
}

const userStore = new UserStore();
export default userStore;
