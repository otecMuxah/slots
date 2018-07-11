import { Config } from './configObj';
import { buildReels } from './buildReels';

export class InputsControl {
    renderInputs = () => {
        let tempHTML = '';
        const numberOfInputs: number = Config.prototype.numberOfReels * Config.prototype.slotsShownPerReel;
        for (let i = 0; i < numberOfInputs; i++) {
            tempHTML += `<input type="text" class="input">`;
        }
        document.getElementById('inputs').innerHTML = tempHTML;
        Config.prototype.inputs = document.getElementsByClassName('input');
    }
    readCurrentSlots = () => {
        //returns new array with items that currently shown
        let temp = [];
        for (let i = 0; i < Config.prototype.numberOfReels; i++) {
            for (let j = 0; j < Config.prototype.slotsShownPerReel; j++) {
                temp.push(Config.prototype.reelArray[j][i])
            }
        }
        return temp;
    }
    getCurrentSlots = (): void => {
        //read slots on app start and save to inputs
        [...Config.prototype.inputs].forEach((el: any, i: number) => {
            el.value = Config.prototype.currentItems[i];
        });
    }

    setCurrentSlots = (): void => {
        //read values from all nine inputs and save them to the end of each reel
        [...Config.prototype.inputs].forEach((el: any, idx: number) => {
            if (idx < 3) {
                let num = Config.prototype.reelArray[idx].length - 3;
                Config.prototype.reelArray[idx][num] = el.value;
            }
            if (3 <= idx && idx < 6) {
                let index = idx - 3;
                let num = Config.prototype.reelArray[index].length - 2;
                Config.prototype.reelArray[index][num] = el.value;
            }
            if (6 <= idx && idx < 9) {
                let index = idx - 6;
                let num = Config.prototype.reelArray[index].length - 1;
                Config.prototype.reelArray[index][num] = el.value;
            }
        });
        buildReels.prototype.renderReel();
    }

    
}