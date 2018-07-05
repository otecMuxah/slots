import './style.css';

document.addEventListener("DOMContentLoaded", function () {
    const validSlotItems: string[] = ['grape', 'lemon', 'orange', 'cherry', 'bell'];
    const numberOfReels: number = 3;
    const slotsShownPerReel: number = 3;
    const spinButton = document.getElementById('spin');
    const inputs = document.getElementsByClassName('input');
    let reelArray: string[][] = [];
    let currentItems: string[];

    const buildRandomArray = (sourceArray: string[], length: number): string[] => {
        //build array with random items using validSlotItems
        //argument 0 - array where from to get items to randomize
        //argument 1 - random array length
        //retuns new random array
        const range: any[] = [];
        range.length = length;
        let tempArray: string[] = [];

        for (let item of range) {
            tempArray.push(validSlotItems[Math.floor(Math.random() * validSlotItems.length)])
        };

        return tempArray;
    }

    const buildReel = (numberOfArrays: number): void => {
        //build array for reels
        //argument 0 - number of reels to build
        let i = 0;
        let numberOfFrames = 20;
        while (i < numberOfArrays) {
            reelArray[i] = buildRandomArray(validSlotItems, numberOfFrames);
            //adding frames to next reel to make it stop consistently, one by one,
            //while keeping almost the same frame rate to each other
            numberOfFrames += 5;
            i++;
        }
    }

    const animateReels = () => {
        //animate reels from start to the end
        const reels: HTMLCollectionOf<Element> = document.getElementsByClassName('reel');
        const app: HTMLElement = document.getElementById('app');
        const appHeight = app.clientHeight;
        //listen for antimation stops, to enable spin button
        reels[reels.length - 1].addEventListener('transitionend', () => {
            spinButton.removeAttribute('disabled');
        });
        //animation goes here
        [...reels].forEach((el: HTMLElement) => {
            const elementHeight: number = el.clientHeight;
            //reset position to start
            el.setAttribute("style", "transition: none; transform: `translate(0, 0}px)");
            el.setAttribute("style", `transition: ease-out ${(elementHeight - appHeight) / 1000}s; transform: translate(0, -${elementHeight - appHeight}px)`)

        });
    }

    const readCurrentSlots = () => {
        //returns new array with items that currently shown
        let temp = [];
        for (let i = 0; i < numberOfReels; i++) {
            for (let j = 0; j < slotsShownPerReel; j++) {
                temp.push(reelArray[j][i])
            }
        }
        return temp;
    }

    const gatherHTMLReel = (source: string[]): string => {
        //Build HTML for one reel
        //argument 0 - random array to get class names for images in slots
        //returns html ul list
        let tempString: string = '';
        for (let item of source) {
            tempString += `<li class="slot"><div class="question ${item}"></div></li>`
        }
        return `<ul class="reel">${tempString}</ul>`
    }

    const renderReel = () => {
        //Apply new HTML to DOM
        let tempHTML: string = gatherHTMLReel(reelArray[0]) + gatherHTMLReel(reelArray[1]) + gatherHTMLReel(reelArray[2]);
        const app: HTMLElement = document.getElementById('app');
        app.innerHTML = tempHTML;
    }

    const getCurrentSlots = (): void => {
        //read slots on app start and save to inputs
        [...inputs].forEach((el: any, i: any) => {
            el.value = currentItems[i];
        });
    }

    const setCurrentSlots = (): void => {
        //read values from all nine inputs and save them to the end of each reel
        [...inputs].forEach((el: any, idx: any) => {
            if (idx < 3) {
                let num = reelArray[idx].length - 3;
                reelArray[idx][num] = el.value;
            }
            if (3 <= idx && idx < 6) {
                let index = idx - 3;
                let num = reelArray[index].length - 2;
                reelArray[index][num] = el.value;
            }
            if (6 <= idx && idx < 9) {
                let index = idx - 6;
                let num = reelArray[index].length - 1;
                reelArray[index][num] = el.value;
            }
        });
        renderReel();
    }

    spinButton.addEventListener('click', () => {
        //disable button after click , apply desiered result to end of reel and start animation
        spinButton.setAttribute('disabled', 'true');
        setCurrentSlots();
        animateReels();
    });

    buildReel(numberOfReels);
    currentItems = readCurrentSlots();
    renderReel();
    getCurrentSlots();
});
