import { config } from './config';
import { buildReels } from './buildReels';
import { InputsControl } from './inputsControl';

export class SlotsGame {
    constructor(reels: number, visibleSlotsOnReel: number, target: HTMLElement) {
        config.numberOfReels = reels;
        config.slotsShownPerReel = visibleSlotsOnReel;
        config.app = target;
        let Inputs: InputsControl = new InputsControl;
        let builder: buildReels = new buildReels(config.numberOfReels);
        Inputs.renderInputs();
        builder.buildReel();
        config.currentItems = Inputs.readCurrentSlots();
        builder.renderReel();
        Inputs.getCurrentSlots();
    }
}