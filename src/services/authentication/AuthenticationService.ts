import { AuthenticationClient } from '../../clients/authentication/AuthenticationClient';

export class AuthenticationService {
    authClient: AuthenticationClient;

    constructor(authClient: AuthenticationClient) {
        this.authClient = authClient;
    }

    async sendLoginRequest(
        username: string,
        password: string,
    ): Promise<string> {
        const response = await this.authClient.sendLoginRequest(
            username,
            password,
        );
        return response.args.token;
    }
}
