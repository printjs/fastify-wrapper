export class RouteConfigModel {
    public value!: any;

    constructor(payload: RouteConfigModel) {
        const { value } = payload;
        this.value = value;
    }
}
