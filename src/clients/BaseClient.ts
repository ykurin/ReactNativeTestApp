import axios, {
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
} from 'axios';
import { NetworkException } from './exceptions/NetworkException';
import { ApiClientException } from './exceptions/ApiClientException';

export abstract class BaseClient {
    protected axiosInstance: AxiosInstance;

    protected constructor(baseUrl: string) {
        this.axiosInstance = axios.create({
            baseURL: baseUrl,
            timeout: 10000,
        });
    }

    get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.request({
            ...config,
            method: 'get',
            url: url,
        });
    }

    post<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.request({
            ...config,
            method: 'post',
            url: url,
        });
    }

    async request<T = any>(config: AxiosRequestConfig): Promise<T> {
        const response = await this.performRequest(config);

        return response.data;
    }

    private performRequest<T = any>(
        config: AxiosRequestConfig,
    ): Promise<AxiosResponse<T>> {
        try {
            return this.axiosInstance.request<T>(config);
        } catch (e) {
            throw BaseClient.handleError(e);
        }
    }

    private static handleError(error: AxiosError): Error {
        console.log('Network Error');

        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log('Status Code ' + error.response.status);
            return new ApiClientException(error.response.status);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            return new NetworkException();
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }

        return error;
    }
}
