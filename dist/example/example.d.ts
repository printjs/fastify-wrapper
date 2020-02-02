declare class AnimalService {
    animal: string;
}
declare class CatService {
    private readonly animalService;
    constructor(animalService: AnimalService);
    getType(): string;
}
declare class DogService {
    private readonly animalService;
    constructor(animalService: AnimalService);
    getType(): string;
}
export declare class ZoomService {
    private readonly catService;
    private readonly dogService;
    constructor(catService: CatService, dogService: DogService);
    getDog(): string;
    getCat(): string;
}
export {};
