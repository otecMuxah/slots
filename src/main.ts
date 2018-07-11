import { SlotsGame } from './slotsGame'

document.addEventListener("DOMContentLoaded", function () {
    const slots = new SlotsGame(3,3, document.getElementById('app'));
});

