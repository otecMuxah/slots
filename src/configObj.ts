export class Config {
    validSlotItems: string[];
    numberOfReels: number;
    slotsShownPerReel: number;
    reelArray: string[][] = [];
    inputs: HTMLCollectionOf<Element>;
    currentItems: string[];
    app: HTMLElement;
    constructor(
        numberOfReels: number, 
        slotsShownPerReel: number,
        target: HTMLElement) {
            this.validSlotItems = ['grape', 'lemon', 'orange', 'cherry', 'bell'];
            this.numberOfReels = numberOfReels;
            this.slotsShownPerReel = slotsShownPerReel;
            this.reelArray = [];
            this.app = target;
    }
}