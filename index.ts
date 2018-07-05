document.addEventListener("DOMContentLoaded", function() {
    const validSlotItems: string[] = ['grape','lemon','orange','cherry','bell'];
    const numberOfReels: number = 3;
    let reelArray: string[][] = [];

    const buildRandomArray = (sourceArray: string[], length: number): string[] => {
        const range: any[] = [];
        range.length = length;
        let tempArray: string[] = [];

        for (let item of range) {
            tempArray.push(validSlotItems[Math.floor(Math.random()*validSlotItems.length)])
        };

        return tempArray;
    }
    const buildReel = (numberOfArrays: number) => {
        let i = 0;
        let numberOfFrames = 20;
        while (i < numberOfArrays) {
            reelArray[i] = buildRandomArray(validSlotItems, numberOfFrames);
            numberOfFrames += 5;
            i++;
        }
    }
    buildReel(numberOfReels);

    let currentItems: string[] = [
        reelArray[0][0],
        reelArray[1][0],
        reelArray[2][0],
        reelArray[0][1],
        reelArray[1][1],
        reelArray[2][1],
        reelArray[0][2],
        reelArray[1][2],
        reelArray[2][2]
    ];


    const renderReel = (source: string[]): string => {
        let tempString: string = '';
        for (let item of source) {
            tempString += `<li class="slot"><div class="${item}"></div></li>`
        }
        return `<ul class="reel">${tempString}</ul>`
    }


    let tempHTML: string = renderReel(reelArray[0]) + renderReel(reelArray[1]) + renderReel(reelArray[2]);
    const app: HTMLElement = document.getElementById('app');
    app.innerHTML = tempHTML;

    let spinButton = document.getElementById('spin');

    const animateReels = () => {
        let reels = document.getElementsByClassName('reel');
        // FIXME - [...reels].forEach not working for some reason
        Array.prototype.forEach.call(reels, (el: HTMLElement) => {
            const elementHeight: number = el.clientHeight;
            el.style.transition = `ease-out ${(elementHeight - 450)/1000}s`;
            let translate = `translate(0, -${elementHeight - 450}px)`;
            el.style.transform = translate;
        });
    }

    spinButton.addEventListener('click',animateReels);

    let inputs = document.getElementsByClassName('input');

    const getCurrentSlots = (): void => {
        Array.prototype.forEach.call(inputs, (el, i) => {
            el.value = currentItems[i];
        });
    }

    const setCurrentSlots = (): void => {
        Array.prototype.forEach.call(inputs, (el, i) => {
            for(let i=0; i<numberOfReels; i++) {

            }
        });
    }
    getCurrentSlots();
});
