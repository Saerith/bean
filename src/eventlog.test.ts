import { expect } from 'chai';
import EventLog from './eventlog';
import { IMessage, Message } from './message';
import log from 'electron-log'; 

describe('EventLog', () => {
    describe('push()', () => {

        const testMessage: IMessage = {
            name: "testMessage",
            type: "testType",
            fields: {
                someValue: 1
            }
        };

        it('should create a new topic if it didn\'t exist', () => {
            let eventlog = new EventLog();
            let message = new Message("testschema", testMessage);
            let topic = "testtopic";

            eventlog.push(topic, message);
            let topics = eventlog.getTopics();

            expect(topics).to.include(topic);

        });

        it('should create a new message in a topic', function() {
            let eventlog = new EventLog();
            let message = new Message("testschema", testMessage);
            let topic = "testtopic";

            let offset = eventlog.push(topic, message);
            let returnedMessage = (eventlog.getMessage(topic, offset));

            expect(offset).to.equal(1);
            expect(returnedMessage).to.equal(message);
        });

        
    });
});