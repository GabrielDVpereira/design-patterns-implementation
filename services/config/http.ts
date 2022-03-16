import { AxiosInstance } from "axios";
import { apiInstance } from "./axios";

export interface IHttp {
    get<T>(url:string): Promise<T>
}

export class Http implements IHttp {
    private readonly api: AxiosInstance; 

    constructor(baseURL: string){
        this.api  = apiInstance(baseURL);
    }

    async get<T>(url: string): Promise<T> {
        const response =  await this.api.get<T>(url);
        return response.data;
    }
}