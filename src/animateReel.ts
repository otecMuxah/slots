import { config } from './config';

export class AnimateReels {
    animateReels = () => {
        //animate reels from start to the end
        const reels: HTMLCollectionOf<Element> = document.getElementsByClassName('reel');
        const app: HTMLElement = config.app;
        const appHeight: number = app.clientHeight;
        //listen for antimation stops, to enable spin button
        reels[reels.length - 1].addEventListener('transitionend', () => {
            config.spinButt.removeAttribute('disabled');
        });
        //animation goes here
        [...reels].forEach((el: HTMLElement) => {
            const elementHeight: number = el.clientHeight;
            //reset position to start
            el.setAttribute("style", "transition: none; transform: `translate(0, 0}px)");
            el.setAttribute("style", `transition: ease-out ${(elementHeight - appHeight) / 1000}s; transform: translate(0, -${elementHeight - appHeight}px)`)

        });
    }
}