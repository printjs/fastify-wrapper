import { FastifyOnSend } from "../template/onsend";
export declare function OnSendWidget<T extends FastifyOnSend>(...fns: T[]): (target: any, propertyKey?: string | undefined, descriptor?: PropertyDescriptor | undefined) => void;
