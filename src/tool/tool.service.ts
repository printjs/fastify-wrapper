export class ToolService {
    public TypeAssertion<T>(x: any): T {
        // tslint:disable-next-line: prefer-type-cast
        return (x as T);
    }

    public mapToObj(map: Map<string, any>) {
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

    public spliceUrl(urls: string[]) {
        return `/${urls.join("")}`.replace(/\/+/g, "/");
    }
}
