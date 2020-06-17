import { observable, action, decorate, computed } from 'mobx';
import { AuthService } from '../../services/AuthService';
import { AuthStore } from '../../stores/AuthStore';

export class SignInViewModel {
    private authStore: AuthStore;

    constructor(authStore: AuthStore) {
        this.authStore = authStore;
    }

    userName = '';

    inProgress = false;

    isLoggedIn = false;

    get showLoginButton() {
        return !this.inProgress && !this.isLoggedIn;
    }

    get signInButtonDisabled() {
        return this.userName === '';
    }

    setUserName(userName: string) {
        this.userName = userName;
    }

    signInUser() {
        this.inProgress = true;
        return AuthService.sendLoginRequest()
            .then(() => {
                this.inProgress = false;
                this.isLoggedIn = true;
                this.authStore.signIn(this.userName);
            })
            .catch(() => {
                this.inProgress = false;
            });
    }

    isTokenLoaded = false;

    loadToken() {
        setTimeout(() => {
            this.isTokenLoaded = true;
        }, 3000);
    }
}
decorate(SignInViewModel, {
    userName: observable,
    inProgress: observable,
    isLoggedIn: observable,
    setUserName: action.bound,
    signInUser: action.bound,
    showLoginButton: computed,
    signInButtonDisabled: computed,
    isTokenLoaded: observable,
    loadToken: action,
});
