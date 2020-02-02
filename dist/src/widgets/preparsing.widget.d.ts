import { FastifyPreParsing } from "../template/preparsing";
export declare function PreParsingWidget<T extends FastifyPreParsing>(...fns: T[]): (target: any, propertyKey?: string | undefined, descriptor?: PropertyDescriptor | undefined) => void;
