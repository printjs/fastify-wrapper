import { RouteModel } from "../model/route.model";
export declare class RouteConfigInject {
    prefixTrailingSlash(controller: new (...args: []) => {}, functionName: string, result: RouteModel): RouteModel;
    bodyLimit(controller: new (...args: []) => {}, functionName: string, result: RouteModel): RouteModel;
    logLevel(controller: new (...args: []) => {}, functionName: string, result: RouteModel): RouteModel;
    version(controller: new (...args: []) => {}, functionName: string, result: RouteModel): RouteModel;
    config(controller: new (...args: []) => {}, functionName: string, result: RouteModel): RouteModel;
}
