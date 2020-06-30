import { AuthenticationClient } from '../../clients/authentication/AuthenticationClient';
import { ServiceError } from '../ServiceError';

export class AuthenticationService {
    authClient: AuthenticationClient;

    constructor(authClient: AuthenticationClient) {
        this.authClient = authClient;
    }

    async sendLoginRequest(
        username: string,
        password: string,
    ): Promise<string> {
        try {
            const response = await this.authClient.sendLoginRequest(
                username,
                password,
            );
            return response.args.token;
        } catch (e) {
            // Handle client errors
            throw new ServiceError();
        }
    }
}
