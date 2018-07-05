document.addEventListener("DOMContentLoaded", function () {
    var validSlotItems = ['grape', 'lemon', 'orange', 'cherry', 'bell'];
    var reelOne, reelTwo, reelThree;
    function buildRandomArray(sourceArray, length) {
        var range = [];
        range.length = length;
        var tempArray = [];
        for (var _i = 0, range_1 = range; _i < range_1.length; _i++) {
            var item = range_1[_i];
            tempArray.push(validSlotItems[Math.floor(Math.random() * validSlotItems.length)]);
        }
        ;
        return tempArray;
    }
    reelOne = buildRandomArray(validSlotItems, 20);
    reelTwo = buildRandomArray(validSlotItems, 25);
    reelThree = buildRandomArray(validSlotItems, 30);
    var currentItems = [reelOne[0],
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
        var tempString = '';
        for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
            var item = source_1[_i];
            tempString += "<li class=\"slot\"><div class=\"" + item + "\"></div></li>";
        }
        return "<ul class=\"reel\">" + tempString + "</ul>";
    }
    var tempHTML = renderReel(reelOne) + renderReel(reelTwo) + renderReel(reelThree);
    var app = document.getElementById('app');
    app.innerHTML = tempHTML;
    var spinButton = document.getElementById('spin');
    spinButton.addEventListener('click', function () {
        var reels = document.getElementsByClassName('reel');
        Array.prototype.forEach.call(reels, function (el) {
            console.log(el.clientHeight);
            el.style.transition = "ease-out " + (el.clientHeight - 450) / 1000 + "s";
            var translate = "translate(0, -" + (el.clientHeight - 450) + "px)";
            el.style.transform = translate;
        });
    });
    var inputs = document.getElementsByClassName('input');
    var index = 0;
    Array.prototype.forEach.call(inputs, function (el, i) {
        console.log(el, i);
        el.value = currentItems[i];
    });
});
