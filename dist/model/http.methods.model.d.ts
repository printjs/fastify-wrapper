import { HTTPMethod } from "../constant/http.method";
export declare class HttpMethodsModel {
    handler: (...args: any[]) => any;
    method: HTTPMethod;
    path: string;
    constructor(payload: IHttpMethodsModel);
}
interface IHttpMethodsModel {
    handler: (...args: any[]) => any;
    method: HTTPMethod;
    path?: string;
}
export {};
