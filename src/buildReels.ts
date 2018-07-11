import { config } from './config'


export class buildReels {
    numberOfArrays: number;
    constructor(numberOfReels: number) {
        this.numberOfArrays = numberOfReels;
    }
    buildReel = (): void => {
        //build array for reels
        //argument 0 - number of reels to build
        let i = 0;
        let numberOfFrames = 20;
        const framesIncrement = 5;

        while (i < this.numberOfArrays) {
            config.reelArray[i] = this.buildRandomArray(config.validSlotItems, numberOfFrames);
            //adding frames to next reel to make it stop consistently, one by one,
            //while keeping almost the same frame rate to each other
            numberOfFrames += framesIncrement;
            i++;
        }
    }
    gatherHTMLReel = (source: string[]): string => {
        //Build HTML for one reel
        //argument 0 - random array to get class names for images in slots
        //returns html ul list
        let tempString: string = '';
        for (let item of source) {
            tempString += `<li class="slot"><div class="question ${item}"></div></li>`
        }
        return `<ul class="reel">${tempString}</ul>`
    }
    renderReel = (): void => {
        let tempHTML: string;
        tempHTML = this.gatherHTMLReel(config.reelArray[0]) + this.gatherHTMLReel(config.reelArray[1]) + this.gatherHTMLReel(config.reelArray[2]);
        const app: HTMLElement = document.getElementById('app');
        app.innerHTML = tempHTML;
    }
    buildRandomArray = (sourceArray: string[], length: number): string[] => {
        //build array with random items using validSlotItems
        //argument 0 - array where from to get items to randomize
        //argument 1 - random array length
        //retuns new random array
        let tempArray: string[] = [];

        for (let i = 0; i < length; i++ ) {
            tempArray.push(config.validSlotItems[Math.floor(Math.random() * config.validSlotItems.length)])
        };

        return tempArray;
    }
    
}