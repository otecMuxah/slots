import { config } from './config';
import { buildReels } from './buildReels';
import { InputsControl } from './inputsControl';
import { AnimateReels } from './animateReel';


export class SlotsGame {
    constructor(reels: number, visibleSlotsOnReel: number, target: HTMLElement) {
        config.numberOfReels = reels;
        config.slotsShownPerReel = visibleSlotsOnReel;
        config.app = target;
        let Inputs: InputsControl = new InputsControl;
        let builder: buildReels = new buildReels(config.numberOfReels);
        let animation: AnimateReels = new AnimateReels;
        Inputs.renderInputs();
        builder.buildReel();
        config.currentItems = Inputs.readCurrentSlots();
        builder.renderReel();
        Inputs.getCurrentSlots();
        document.getElementById('spin').addEventListener('click', () => {
            //disable button after click , apply desiered result to end of reel and start animation
            document.getElementById('spin').setAttribute('disabled', 'true');
            Inputs.setCurrentSlots();
            animation.animateReels();
        });
    }
}