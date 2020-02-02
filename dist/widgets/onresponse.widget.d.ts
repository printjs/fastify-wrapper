import { FastifyOnResponse } from "../template/onresponse";
export declare function OnResponseWidget<T extends FastifyOnResponse>(...fns: T[]): (target: any, propertyKey?: string | undefined, descriptor?: PropertyDescriptor | undefined) => void;
