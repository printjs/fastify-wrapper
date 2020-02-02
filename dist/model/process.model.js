"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProcessModel {
    constructor(payload) {
        const { fn, level, functionName } = payload;
        this.fn = fn;
        this.level = level;
        if (functionName) {
            this.functionName = functionName;
        }
    }
}
exports.ProcessModel = ProcessModel;
