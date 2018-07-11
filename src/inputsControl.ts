import { config } from './config';
import { buildReels } from './buildReels';

export class InputsControl {
    renderInputs = () => {
        let tempHTML = '';
        const numberOfInputs: number = config.numberOfReels * config.slotsShownPerReel;
        for (let i = 0; i < numberOfInputs; i++) {
            tempHTML += `<input type="text" class="input">`;
        }
        document.getElementById('inputs').innerHTML = tempHTML;
        config.inputs = document.getElementsByClassName('input');
    }
    readCurrentSlots = () => {
        //returns new array with items that currently shown
        let temp = [];
        for (let i = 0; i < config.numberOfReels; i++) {
            for (let j = 0; j < config.slotsShownPerReel; j++) {
                temp.push(config.reelArray[j][i])
            }
        }
        return temp;
    }
    getCurrentSlots = (): void => {
        //read slots on app start and save to inputs
        [...config.inputs].forEach((el: any, i: number) => {
            el.value = config.currentItems[i];
        });
    }

    setCurrentSlots = (): void => {
        //read values from all nine inputs and save them to the end of each reel
        [...config.inputs].forEach((el: any, idx: number) => {
            if (idx < 3) {
                let num = config.reelArray[idx].length - 3;
                config.reelArray[idx][num] = el.value;
            }
            if (3 <= idx && idx < 6) {
                let index = idx - 3;
                let num = config.reelArray[index].length - 2;
                config.reelArray[index][num] = el.value;
            }
            if (6 <= idx && idx < 9) {
                let index = idx - 6;
                let num = config.reelArray[index].length - 1;
                config.reelArray[index][num] = el.value;
            }
        });
        let builder: buildReels = new buildReels(config.numberOfReels);
        builder.renderReel();
    }

    
}