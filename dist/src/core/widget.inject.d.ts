import { RouteModel } from "../model/route.model";
export declare class WidgetInject {
    guardWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel): RouteModel;
    preHandlerWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel): RouteModel;
    onRequestWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel): RouteModel;
    preParsingWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel): RouteModel;
    preSerializationWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel): RouteModel;
    onSendWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel): RouteModel;
    onResponseWidget(controller: new (...args: []) => {}, functionName: string, result: RouteModel): RouteModel;
}
