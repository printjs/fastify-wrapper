export class RouteConfigModel {
    public value!: any;
    public level!: "class" | "function";
    public functionName?: string;

    constructor(payload: RouteConfigModel) {
        const { value, level, functionName } = payload;
        this.value = value;
        this.level = level;
        if (functionName) {
            this.functionName = functionName;
        }
    }
}
