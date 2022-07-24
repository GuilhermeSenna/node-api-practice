import crypto from 'crypto';

// T - Generic
export abstract class Entity<T> {
    protected _id: string;
    public props: T;

    constructor(props: T, id?: string) {
        this.props = props;

        // If no id is received (user don't exist) then create a new one!
        this._id = id ?? crypto.randomUUID();
    }
}