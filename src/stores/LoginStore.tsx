import { observable, action, decorate } from 'mobx';

export class LoginStore {
    userName = '';

    inProgress = false;

    isLoggedIn = false;

    setUserName(userName: string) {
        this.userName = userName;
    }

    loginUser() {
        this.inProgress = true;
        return LoginStore.sendLoginRequest()
            .then(() => {
                this.inProgress = false;
                this.isLoggedIn = true;
            })
            .catch(() => {
                this.inProgress = false;
            });
    }

    private static async sendLoginRequest() {
        const response = await fetch(
            'https://postman-echo.com/get?foo1=bar1&foo2=bar2',
        );
        return await response.json();
    }
}
decorate(LoginStore, {
    userName: observable,
    inProgress: observable,
    isLoggedIn: observable,
    setUserName: action,
    loginUser: action,
});
