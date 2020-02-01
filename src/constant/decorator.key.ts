export enum DecoratorKey {
    // http methods
    POST = "decorator:design:post",
    GET = "decorator:design:get",
    PUT = "decorator:design:put",
    DELETE = "decorator:design:delete",
    PATCH = "decorator:design:patch",
    OPTIONS = "decorator:design:options",
    HEAD = "decorator:design:head",
    // mvc structure
    Controller = "decorator:design:controller",
    Service = "decorator:design:service",
    Container = "decorator:design:container",
    Metadata = "decorator:design:metadata",
    Inject = "decorator:design:inject",
    // params decorator
    Query = "decorator:design:query",
    Param = "decorator:design:param",
    Body = "decorator:design:body",
    Request = "decorator:design:request",
    Reply = "decorator:design:reply",
    Done = "fasitfy:design:done",
    // build-in decorator
    ParamTypes = "design:paramtypes",
    // route options
    PrefixTrailingSlash = "decorator:design:prefixtrailingslash",
    BodyLimit = "decorator:design:bodylimit",
    LogLevel = "decorator:design:loglevel",
    Version = "decorator:design:version",
    Config = "decorator:design:config",
}

