import { action, decorate, observable } from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthService } from '../services/AuthService';

const TOKEN_KEY = 'token';

export class AuthManager {
    isSighedId = false;

    async signIn(username: string, password: string) {
        const token = await AuthService.sendLoginRequest(username, password);
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
        this.isSighedId = isTokenExists;
        return isTokenExists;
    }
}

decorate(AuthManager, {
    isSighedId: observable,
    signIn: action,
    signOut: action,
    checkToken: action,
});
