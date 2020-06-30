import { TokenResponseDto } from './dto/TokenResponseDto';
import { BaseClient } from '../BaseClient';

export class AuthenticationClient extends BaseClient {
    constructor() {
        super('https://postman-echo.com');
    }

    sendLoginRequest(
        username: string,
        password: string,
    ): Promise<TokenResponseDto> {
        return this.get<TokenResponseDto>('/get', {
            params: {
                token: 'hardcodedToken',
            },
        });
    }
}
