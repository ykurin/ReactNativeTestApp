import { AuthManager } from './managers/AuthManager';
import { SignInViewModel } from './ui/login/SignInViewModel';
import { ProfileViewModel } from './ui/profile/ProfileViewModel';

export class InjectionUtils {
    private static globalStores = {
        authManager: new AuthManager(),
    };

    static getGlobalStores = () => InjectionUtils.globalStores;
    static getAuthManager = () => InjectionUtils.globalStores.authManager;

    static createSignInViewModel = () =>
        new SignInViewModel(InjectionUtils.getAuthManager());

    static createProfileViewModel = () =>
        new ProfileViewModel(InjectionUtils.getAuthManager());
}
