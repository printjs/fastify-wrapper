export {
    BodyLimit,
    Body,
    Config,
    Controller,
    Delete,
    Done,
    Get,
    Head,
    Injectable,
    LogLevel,
    Options,
    Param,
    Post,
    PrefixTrailingSlash,
    Put,
    Query,
    Reply,
    Request,
    Version,
} from "./decorator";

export {
    GuardWidget,
    OnRequestWidget,
    OnResponseWidget,
    OnSendWidget,
    PreHandlerWidget,
    PreParsingWidget,
    preSerializationWidget,
    SchemaWidget,
} from "./widgets";

export {
    FastifyGuard,
    FastifyOnError,
    FastifyOnRequest,
    FastifyOnResponse,
    FastifyOnSend,
    FastifyPreHandler,
    FastifyPreParsing,
    FastifyPreSerialization,
} from "./template";

export { FastifyContainer } from "./core";
