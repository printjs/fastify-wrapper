import { FastifyOnRequest } from "../template/onrequest";
export declare function OnRequestWidget<T extends FastifyOnRequest>(...onRequests: T[]): (target: any, propertyKey?: string | undefined, descriptor?: PropertyDescriptor | undefined) => void;
