import { TokenResponseDto } from './dto/TokenResponseDto';

export class AuthenticationClient {
    async sendLoginRequest(
        username: string,
        password: string,
    ): Promise<TokenResponseDto> {
        const response = await fetch(
            'https://postman-echo.com/get?token=hardcodedToken',
        );
        return await response.json();
    }
}
