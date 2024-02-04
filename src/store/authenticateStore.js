import { makeAutoObservable } from "mobx";

class AuthenticateStore {
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(checkAuth) {
    this.isAuth = checkAuth;
  }
}

const authStore = new AuthenticateStore();
export default authStore;