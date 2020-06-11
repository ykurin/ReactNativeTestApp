import { AuthStore } from './stores/AuthStore';
import { SignInViewModel } from './ui/login/SignInViewModel';
import { ProfileViewModel } from './ui/profile/ProfileViewModel';

export class InjectionUtils {
    private static globalStores = {
        authStore: new AuthStore(),
    };

    static getGlobalStores = () => InjectionUtils.globalStores;
    static getAuthStore = () => InjectionUtils.globalStores.authStore;

    static createSignInViewModel = () =>
        new SignInViewModel(InjectionUtils.getAuthStore());

    static createProfileViewModel = () =>
        new ProfileViewModel(InjectionUtils.getAuthStore());
}
