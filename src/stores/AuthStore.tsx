import { action, decorate, observable } from 'mobx';

export class AuthStore {
    userName = '';

    isSighedId = false;

    signIn(userName: string) {
        this.userName = userName;
        this.isSighedId = true;
    }

    signOut() {
        this.userName = '';
        this.isSighedId = false;
    }
}

decorate(AuthStore, {
    userName: observable,
    isSighedId: observable,
    signIn: action,
    signOut: action,
});
