import { observable } from "mobx";
import { enableLogging } from "mobx-logger";
let index = 0;

enableLogging({
  action: true,
  reaction: false,
  transaction: true,
  compute: true,
});
class UserStore {
  @observable userStore = {
    token: null,
    firstname: null,
    lastname: null,
    avatar: null,
  };

  setToken(token) {
    this.userStore = { ...this.userStore, token };
  }

  setData(data) {
    this.userStore = { ...data, token: this.userStore.token };
  }
}

const userStore = new UserStore();
export default userStore;
