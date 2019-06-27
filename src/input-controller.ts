import log from 'electron-log'; 
import eventlog from './eventlog';
import { Message } from './message';

class InputController {

    canvas: HTMLCanvasElement;
    eventlistener: EventListener;

    constructor() {

    }

    start() {
        log.debug('Starting input');
        // setup listeners

        
    }

    /**
     * Prevent the default behavior for any keys that will be used as controls
     */
    private preventDefaults() {
    }

    private keyDownEventListener(keyEvent: Event) {
        keyEvent.preventDefault();
        keyMessage = new Message("something", )
        eventlog.produce()
    }

    private keyUpEventListener(keyEvent: Event) {
        keyEvent.preventDefault();

    }

    

}