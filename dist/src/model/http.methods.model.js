"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HttpMethodsModel {
    constructor(payload) {
        this.path = "";
        const { handler, method, path } = payload;
        this.handler = handler;
        this.method = method;
        if (path) {
            this.path = path;
        }
    }
}
exports.HttpMethodsModel = HttpMethodsModel;
