import { AuthenticationManager } from './managers/authentication/AuthenticationManager';
import { SignInViewModel } from './ui/login/SignInViewModel';
import { ProfileViewModel } from './ui/profile/ProfileViewModel';
import { AuthenticationService } from './services/authentication/AuthenticationService';
import { AuthenticationClient } from './clients/authentication/AuthenticationClient';

export class InjectionUtils {
    private static globalStores = {
        authManager: new AuthenticationManager(
            new AuthenticationService(new AuthenticationClient()),
        ),
    };

    static getGlobalStores = () => InjectionUtils.globalStores;
    static getAuthManager = () => InjectionUtils.globalStores.authManager;

    static createSignInViewModel = () =>
        new SignInViewModel(InjectionUtils.getAuthManager());

    static createProfileViewModel = () =>
        new ProfileViewModel(InjectionUtils.getAuthManager());
}
