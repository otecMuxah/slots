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


    const gatherHTMLReel = (source: string[]): string => {
        let tempString: string = '';
        for (let item of source) {
            tempString += `<li class="slot"><div class="${item}"></div></li>`
        }
        return `<ul class="reel">${tempString}</ul>`
    }

    const renderReel = () => {
        let tempHTML: string = gatherHTMLReel(reelArray[0]) + gatherHTMLReel(reelArray[1]) + gatherHTMLReel(reelArray[2]);
        const app: HTMLElement = document.getElementById('app');
        app.innerHTML = tempHTML;
    }


    let spinButton = document.getElementById('spin');

    const animateReels = () => {
        setCurrentSlots();
        let reels = document.getElementsByClassName('reel');
        // FIXME - [...reels].forEach not working for some reason
        Array.prototype.forEach.call(reels, (el: HTMLElement) => {
            el.style.transition = `none`;
            let translate = `translate(0, 0)`;
            el.style.transform = translate;
            const elementHeight: number = el.clientHeight;
            el.style.transition = `ease-out ${(elementHeight - 450)/1000}s`;
            translate = `translate(0, -${elementHeight - 450}px)`;
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
        Array.prototype.forEach.call(inputs, (el, idx) => {
            if (idx < 3) {
                let num = reelArray[idx].length-3;
                reelArray[idx][num] = el.value;
            }
            if (3 <= idx && idx < 6) {
                let index = idx - 3;
                let num = reelArray[index].length-2;
                reelArray[index][num] = el.value;
            }
            if (6 <= idx && idx < 9) {
                let index = idx - 6;
                let num = reelArray[index].length-1;
                reelArray[index][num] = el.value;
            }
         });
        renderReel();
    }
    getCurrentSlots();
});
