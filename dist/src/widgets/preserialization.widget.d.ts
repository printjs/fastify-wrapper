import { FastifyPreSerialization } from "../template/preSerialization";
export declare function preSerializationWidget<T extends FastifyPreSerialization>(...fns: T[]): (target: any, propertyKey?: string | undefined, descriptor?: PropertyDescriptor | undefined) => void;
