import { FastifyPreHandler } from "../template/prehandler";
export declare function PreHandlerWidget<T extends FastifyPreHandler>(...preHandlers: T[]): (target: any, propertyKey?: string | undefined, descriptor?: PropertyDescriptor | undefined) => void;
