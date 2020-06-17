export class AuthService {
    static async sendLoginRequest(username: string, password: string) {
        const response = await fetch(
            'https://postman-echo.com/get?foo1=bar1&foo2=bar2',
        );
        const parsedData = await response.json();
        return 'someToken';
    }
}
