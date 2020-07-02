import { AuthenticationClient } from '../../clients/authentication/AuthenticationClient';
import { ServiceError } from '../ServiceError';
import { NetworkException } from '../../clients/exceptions/NetworkException';
import { ServiceErrorType } from '../ServiceErrorType';

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
            if (e instanceof NetworkException) {
                throw new ServiceError(ServiceErrorType.Network);
            } else {
                throw new ServiceError(ServiceErrorType.General);
            }
        }
    }
}
