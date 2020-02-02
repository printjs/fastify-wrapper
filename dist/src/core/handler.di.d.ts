import { RouteModel } from "../model/route.model";
export declare class HandlerDI {
    injectService(injectable: (new (...args: any[]) => any)): (new (...args: any[]) => any)[];
    handlerController(controller: new (...args: []) => {}): RouteModel[];
}
