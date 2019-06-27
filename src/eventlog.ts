import log from 'electron-log'; 
import { Message } from './message';

class EventLog {
    _topics: Map<string, Array<Message>>;
    _offsets: Map<string, number>;

    constructor() {
        this._topics = new Map();
        this._offsets = new Map();
    }

    /**
     * Push a message to a topic.
     * This will create a new topic if one didn't already exist.
     * 
     * @param topic the topic name
     * @param message the message
     * @returns the offset index of the message for the topic
     */
    produce(topic: string, message: Message) {
        let offset;

        // create a new topic if it doesn't exist
        if (!this._topics.has(topic)) {

            // create new array containing first message
            let arr = new Array();
            offset = arr.push(message);

            // set kv pair with new array and topic name
            this._topics.set(topic, arr);
        }
        else {
            offset = this._topics.get(topic).push(message);
        }

        // update offset
        this._offsets.set(topic, offset);
        return offset;
    }

    /**
     * Get a message from a topic at a given offset index.
     * 
     * @param topic the topic name
     * @param offset the offset index
     */
    consume(topic: string, offset: number) {
        return this._topics.get(topic)[offset-1];
    }

    getTopics() {
        return Array.from( this._topics.keys() );
    }

    getOffset(topic: string) {
        return this._offsets.get(topic);
    }
}

export default new EventLog();