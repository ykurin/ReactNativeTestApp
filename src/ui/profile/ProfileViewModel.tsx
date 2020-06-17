import { AuthManager } from '../../managers/AuthManager';
import { action, computed, decorate } from 'mobx';

export class ProfileViewModel {
    private authManager: AuthManager;

    constructor(authManager: AuthManager) {
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
