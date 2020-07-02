import { ServiceErrorType } from './ServiceErrorType';

export class ServiceError extends Error {
    errorType: ServiceErrorType;

    constructor(errorType: ServiceErrorType) {
        super(errorType);
        this.errorType = errorType;
    }
}
