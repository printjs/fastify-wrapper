import {
    Injectable
} from "../src";

@Injectable
export class Level1ServiceMock {
    public getName() {
        return "level1";
    }
}

@Injectable
export class Level2ServiceMock {
    public getName() {
        return "level2";
    }
}

@Injectable
export class Level3ServiceMock {
    constructor(
        private readonly level2Service: Level2ServiceMock,
    ) { }
    public getName() {
        return "level3";
    }

    public getMessage() {
        return `level3 include ${this.level2Service.getName()}`;
    }
}
