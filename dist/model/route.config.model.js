"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RouteConfigModel {
    constructor(payload) {
        const { value, level, functionName } = payload;
        this.value = value;
        this.level = level;
        if (functionName) {
            this.functionName = functionName;
        }
    }
}
exports.RouteConfigModel = RouteConfigModel;
