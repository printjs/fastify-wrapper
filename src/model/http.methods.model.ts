import { HTTPMethod } from "../constant/http.method";

export class HttpMethodsModel {
    public handler!: (...args: any[]) => any;
    public method!: HTTPMethod;
    public path: string = "";
    constructor(payload: IHttpMethodsModel) {
        const { handler, method, path } = payload;
        this.handler = handler;
        this.method = method;
        if (path) {
            this.path = path;
        }
    }
}

interface IHttpMethodsModel {
    handler: (...args: any[]) => any;
    method: HTTPMethod;
    path?: string;
}
