document.addEventListener("DOMContentLoaded", function() {
    const validSlotItems: string[] = ['grape','lemon','orange','cherry','bell'];
    let reelOne: string[],reelTwo: string[],reelThree: string[];

    function buildRandomArray(sourceArray: string[], length: number): string[] {
        const range: any[] = [];
        range.length = length;
        let tempArray: string[] = [];

        for (let item of range) {
            tempArray.push(validSlotItems[Math.floor(Math.random()*validSlotItems.length)])
        };

        return tempArray;
    }

    reelOne = buildRandomArray(validSlotItems, 20);
    reelTwo = buildRandomArray(validSlotItems, 25);
    reelThree = buildRandomArray(validSlotItems, 30);

    let currentItems = [reelOne[0],
                        reelTwo[0],
                        reelThree[0],
                        reelOne[1],
                        reelTwo[1],
                        reelThree[1],
                        reelOne[2],
                        reelTwo[2],
                        reelThree[2]
    ];


    function renderReel(source) {
        let tempString = '';
        for (let item of source) {
            tempString += `<li class="slot"><div class="${item}"></div></li>`
        }
        return `<ul class="reel">${tempString}</ul>`
    }


    let tempHTML = renderReel(reelOne) + renderReel(reelTwo) + renderReel(reelThree);
    const app = document.getElementById('app');
    app.innerHTML = tempHTML;

    let spinButton = document.getElementById('spin');

    spinButton.addEventListener('click',() => {
        let reels = document.getElementsByClassName('reel');
        Array.prototype.forEach.call(reels, (el) => {
            console.log(el.clientHeight);
            el.style.transition = `ease-out ${(el.clientHeight - 450)/1000}s`;
            let translate = `translate(0, -${el.clientHeight - 450}px)`;
            el.style.transform = translate;
        });
    })

    let inputs = document.getElementsByClassName('input');
    let index = 0;

    function getCurrentSlots () {
        Array.prototype.forEach.call(inputs, (el, i) =>git  {
            el.value = currentItems[i];
        });
    }

    getCurrentSlots();
});
