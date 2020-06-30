export class ServiceError implements Error {
    message: string;
    name: string;
    stack?: string;

    constructor(name: string = '', message: string = '', stack?: string) {
        this.name = name;
        this.message = message;
        this.stack = stack;
    }
}
