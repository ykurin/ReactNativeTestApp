import { action, decorate, observable } from 'mobx';
import { AuthenticationService } from '../../services/authentication/AuthenticationService';
import * as Keychain from 'react-native-keychain';

const TOKEN_KEY = 'token';

export class AuthenticationManager {
    isSighedId = false;

    token: string | null = null;

    authService: AuthenticationService;

    constructor(authService: AuthenticationService) {
        this.authService = authService;
    }

    async signIn(username: string, password: string) {
        try {
            this.token = await this.authService.sendLoginRequest(
                username,
                password,
            );
            await Keychain.setGenericPassword(TOKEN_KEY, this.token);
            this.isSighedId = true;
        } catch (e) {
            this.token = null;
            this.isSighedId = false;
            throw e;
        }
    }

    async signOut() {
        await Keychain.resetGenericPassword();
        this.token = null;
        this.isSighedId = false;
    }

    async checkToken() {
        const credentials = await Keychain.getGenericPassword();
        if (credentials) {
            this.token = credentials.password;
        }
        const isTokenExists = this.token !== null;
        this.isSighedId = isTokenExists;
        return isTokenExists;
    }
}

decorate(AuthenticationManager, {
    isSighedId: observable,
    signIn: action,
    signOut: action,
    checkToken: action,
});
