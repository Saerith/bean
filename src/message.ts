export interface IMessage {
    name: string,
    type: string,
    fields: Object
}

export class Message {
    _schema: string;
    _message: IMessage;

    constructor(schema: string, message: IMessage) {
        this._schema = schema;
        this._message = message;
    }

    validate(schema: string, message: string) {
        for (const property in JSON.parse(schema)) {

        }
    }

    
}

