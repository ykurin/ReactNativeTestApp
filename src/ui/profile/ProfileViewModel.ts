import { AuthenticationManager } from '../../managers/authentication/AuthenticationManager';
import { action, computed, decorate } from 'mobx';

export class ProfileViewModel {
    private authManager: AuthenticationManager;

    constructor(authManager: AuthenticationManager) {
        this.authManager = authManager;
    }

    get welcomeMessage() {
        return 'welcome to the profile screen!';
    }

    signOut = () => this.authManager.signOut();
}

decorate(ProfileViewModel, {
    welcomeMessage: computed,
    signOut: action.bound,
});
