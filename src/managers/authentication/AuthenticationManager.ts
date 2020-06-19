import { action, decorate, observable } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthenticationService } from '../../services/authentication/AuthenticationService';

const TOKEN_KEY = 'token';

export class AuthenticationManager {
    isSighedId = false;

    token = '';

    authService: AuthenticationService;

    constructor(authService: AuthenticationService) {
        this.authService = authService;
    }

    async signIn(username: string, password: string) {
        const token = await this.authService.sendLoginRequest(
            username,
            password,
        );
        await AsyncStorage.setItem(TOKEN_KEY, token);
        this.isSighedId = true;
        return true;
    }

    async signOut() {
        await AsyncStorage.removeItem(TOKEN_KEY);
        this.isSighedId = false;
    }

    async checkToken() {
        const token = await AsyncStorage.getItem(TOKEN_KEY);
        const isTokenExists = token !== null;
        if (isTokenExists) {
            this.token = token!;
        }
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
