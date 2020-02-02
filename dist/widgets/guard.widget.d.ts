import { FastifyGuard } from "../template/guard";
export declare function GuardWidget<T extends FastifyGuard>(...guards: T[]): (target: any, propertyKey?: string | undefined, descriptor?: PropertyDescriptor | undefined) => void;
