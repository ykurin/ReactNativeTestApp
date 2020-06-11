import { AuthStore } from '../../stores/AuthStore';
import { action, computed, decorate, observable } from 'mobx';

export class ProfileViewModel {
    private authStore: AuthStore;

    constructor(authStore: AuthStore) {
        this.authStore = authStore;
    }

    get userName() {
        return this.authStore.userName;
    }

    signOut = () => this.authStore.signOut();
}

decorate(ProfileViewModel, {
    userName: computed,
    signOut: action.bound,
});
