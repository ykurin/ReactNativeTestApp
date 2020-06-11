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

    get SignInButtonDisabled() {
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
}
decorate(SignInViewModel, {
    userName: observable,
    inProgress: observable,
    isLoggedIn: observable,
    setUserName: action.bound,
    signInUser: action.bound,
    showLoginButton: computed,
    SignInButtonDisabled: computed,
});
