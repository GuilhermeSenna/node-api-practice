import crypto from 'crypto';

// T - Generic
export abstract class Entity<T> {
    protected _id: string;
    public props: T;

    get id() {
        return this._id
    };

    constructor(props: T, id?: string) {
        this.props = props;

        console.log(props);

        // If no id is received (user don't exist) then create a new one!
        this._id = id ?? crypto.randomUUID();
    }
}