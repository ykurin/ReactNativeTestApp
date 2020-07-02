import { observable, action, decorate, computed } from 'mobx';
import { AuthenticationManager } from '../../managers/authentication/AuthenticationManager';
import { ServiceError } from '../../services/ServiceError';
import { BaseViewModel } from '../BaseViewModel';

export class SignInViewModel extends BaseViewModel {
    private authManager: AuthenticationManager;

    constructor(authManager: AuthenticationManager) {
        super();
        this.authManager = authManager;
    }

    userName = '';

    password = '';

    inProgress = false;

    isTokenChecked = false;

    get showLoginButton() {
        return !this.inProgress && !this.authManager.isSighedId;
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
        try {
            await this.authManager.signIn(this.userName, this.password);
        } catch (e) {
            const error = e as ServiceError;
            // TODO show snack bar once
            this.snackBarMessage = error.message;
        } finally {
            this.inProgress = false;
        }
    }

    async checkToken() {
        await this.authManager.checkToken();
        this.isTokenChecked = true;
    }
}
decorate(SignInViewModel, {
    userName: observable,
    password: observable,
    inProgress: observable,
    setUserName: action.bound,
    setPassword: action.bound,
    signInUser: action.bound,
    showLoginButton: computed,
    signInButtonDisabled: computed,
    isTokenChecked: observable,
    checkToken: action,
});
