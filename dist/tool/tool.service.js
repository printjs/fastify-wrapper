"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ToolService {
    TypeAssertion(x) {
        return x;
    }
    mapToObj(map) {
        const obj = Object.create(null);
        for (const [k, v] of map) {
            let tmpValue = v;
            if (v instanceof Map) {
                tmpValue = this.mapToObj(v);
            }
            obj[typeof k === "number" ? `${k}` : k] = tmpValue;
        }
        return obj;
    }
    spliceUrl(urls) {
        return `/${urls.join("")}`.replace(/\/+/g, "/");
    }
}
exports.ToolService = ToolService;
