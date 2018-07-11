import { Config } from './configObj';
import { buildReels } from './buildReels';
import { InputsControl } from './inputsControl';

export class SlotsGame {
    config: Config
    constructor(reels: number, visibleSlotsOnReel: number, target: HTMLElement) {
        this.config = new Config(reels, visibleSlotsOnReel, target);
        let Inputs: InputsControl = new InputsControl;
        let builder: buildReels = new buildReels(this.config.numberOfReels);
        Inputs.renderInputs();
        builder.buildReel();
        this.config.currentItems = Inputs.readCurrentSlots();
        builder.renderReel();
        Inputs.getCurrentSlots();
    }
}