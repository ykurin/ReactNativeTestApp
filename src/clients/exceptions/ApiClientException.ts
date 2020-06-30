export class ApiClientException extends Error {
    statusCode: number;

    constructor(statusCode: number) {
        super();

        this.statusCode = statusCode;
    }
}
