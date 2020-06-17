import { observable, action, decorate, computed } from 'mobx';
import { AuthManager } from '../../managers/AuthManager';

export class SignInViewModel {
    private authManager: AuthManager;

    constructor(authManager: AuthManager) {
        this.authManager = authManager;
    }

    userName = '';

    password = '';

    inProgress = false;

    isLoggedIn = false;

    get showLoginButton() {
        return !this.inProgress && !this.isLoggedIn;
    }

    get signInButtonDisabled() {
        return this.userName === '' || this.password === '';
    }

    setUserName(userName: string) {
        this.userName = userName;
    }

    setPassword(password: string) {
        this.password = password;
    }

    async signInUser() {
        this.inProgress = true;
        const isSignedIn = await this.authManager.signIn(
            this.userName,
            this.password,
        );
        this.inProgress = false;
        this.isLoggedIn = isSignedIn;
    }

    isTokenChecked = false;

    async checkToken() {
        await this.authManager.checkToken();
        this.isTokenChecked = true;
    }
}
decorate(SignInViewModel, {
    userName: observable,
    password: observable,
    inProgress: observable,
    isLoggedIn: observable,
    setUserName: action.bound,
    setPassword: action.bound,
    signInUser: action.bound,
    showLoginButton: computed,
    signInButtonDisabled: computed,
    isTokenChecked: observable,
    checkToken: action,
});
