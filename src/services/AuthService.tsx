export class AuthService {
    static async sendLoginRequest() {
        const response = await fetch(
            'https://postman-echo.com/get?foo1=bar1&foo2=bar2',
        );
        return await response.json();
    }
}
