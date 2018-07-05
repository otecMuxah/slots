document.addEventListener("DOMContentLoaded", function () {
    var validSlotItems = ['grape', 'lemon', 'orange', 'cherry', 'bell'];
    var numberOfReels = 3;
    var reelArray = [];
    var buildRandomArray = function (sourceArray, length) {
        var range = [];
        range.length = length;
        var tempArray = [];
        for (var _i = 0, range_1 = range; _i < range_1.length; _i++) {
            var item = range_1[_i];
            tempArray.push(validSlotItems[Math.floor(Math.random() * validSlotItems.length)]);
        }
        ;
        return tempArray;
    };
    var buildReel = function (numberOfArrays) {
        var i = 0;
        var numberOfFrames = 20;
        while (i < numberOfArrays) {
            reelArray[i] = buildRandomArray(validSlotItems, numberOfFrames);
            numberOfFrames += 5;
            i++;
        }
    };
    buildReel(numberOfReels);
    var currentItems = [
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
    var renderReel = function (source) {
        var tempString = '';
        for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
            var item = source_1[_i];
            tempString += "<li class=\"slot\"><div class=\"" + item + "\"></div></li>";
        }
        return "<ul class=\"reel\">" + tempString + "</ul>";
    };
    var tempHTML = renderReel(reelArray[0]) + renderReel(reelArray[1]) + renderReel(reelArray[2]);
    var app = document.getElementById('app');
    app.innerHTML = tempHTML;
    var spinButton = document.getElementById('spin');
    var animateReels = function () {
        var reels = document.getElementsByClassName('reel');
        // FIXME - [...reels].forEach not working for some reason
        Array.prototype.forEach.call(reels, function (el) {
            var elementHeight = el.clientHeight;
            el.style.transition = "ease-out " + (elementHeight - 450) / 1000 + "s";
            var translate = "translate(0, -" + (elementHeight - 450) + "px)";
            el.style.transform = translate;
        });
    };
    spinButton.addEventListener('click', animateReels);
    var inputs = document.getElementsByClassName('input');
    var getCurrentSlots = function () {
        Array.prototype.forEach.call(inputs, function (el, i) {
            el.value = currentItems[i];
        });
    };
    var setCurrentSlots = function () {
        Array.prototype.forEach.call(inputs, function (el, i) {
        });
    };
    getCurrentSlots();
});
