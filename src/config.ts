interface Config {
    validSlotItems: string[];
    numberOfReels: number;
    slotsShownPerReel: number;
    reelArray: string[][];
    currentItems: string[];
    app: HTMLElement;
    inputs: HTMLCollectionOf<Element>;
}

export let config: Config = {
    validSlotItems : ['grape', 'lemon', 'orange', 'cherry', 'bell'],
    numberOfReels : 0,
    slotsShownPerReel : 0,
    reelArray : [],
    currentItems: [],
    app : null,
    inputs: null
}

    