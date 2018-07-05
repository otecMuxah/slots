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
    var gatherHTMLReel = function (source) {
        var tempString = '';
        for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
            var item = source_1[_i];
            tempString += "<li class=\"slot\"><div class=\"question " + item + "\"></div></li>";
        }
        return "<ul class=\"reel\">" + tempString + "</ul>";
    };
    var renderReel = function () {
        var tempHTML = gatherHTMLReel(reelArray[0]) + gatherHTMLReel(reelArray[1]) + gatherHTMLReel(reelArray[2]);
        var app = document.getElementById('app');
        app.innerHTML = tempHTML;
    };
    renderReel();
    var spinButton = document.getElementById('spin');
    var animateReels = function () {
        var reels = document.getElementsByClassName('reel');
        var app = document.getElementById('app');
        var appHeight = app.clientHeight;
        reels[reels.length - 1].addEventListener('transitionend', function () {
            spinButton.removeAttribute('disabled');
        });
        // FIXME - [...reels].forEach not working for some reason
        Array.prototype.forEach.call(reels, function (el) {
            var elementHeight = el.clientHeight;
            //reset position
            el.style.transition = "none";
            var translate = "translate(0, 0)";
            el.style.transform = translate;
            //scroll to the end
            el.style.transition = "ease-out " + (elementHeight - appHeight) / 1000 + "s";
            translate = "translate(0, -" + (elementHeight - appHeight) + "px)";
            el.style.transform = translate;
        });
    };
    spinButton.addEventListener('click', function () {
        spinButton.setAttribute('disabled', 'true');
        setCurrentSlots();
        animateReels();
    });
    var inputs = document.getElementsByClassName('input');
    var getCurrentSlots = function () {
        Array.prototype.forEach.call(inputs, function (el, i) {
            el.value = currentItems[i];
        });
    };
    var setCurrentSlots = function () {
        Array.prototype.forEach.call(inputs, function (el, idx) {
            if (idx < 3) {
                var num = reelArray[idx].length - 3;
                reelArray[idx][num] = el.value;
            }
            if (3 <= idx && idx < 6) {
                var index = idx - 3;
                var num = reelArray[index].length - 2;
                reelArray[index][num] = el.value;
            }
            if (6 <= idx && idx < 9) {
                var index = idx - 6;
                var num = reelArray[index].length - 1;
                reelArray[index][num] = el.value;
            }
        });
        renderReel();
    };
    getCurrentSlots();
});
