interface IQueuable {
    //adds value to queue and returns new queue
    enqueue(value: string): string[];
    //removes item from queue, and returns the item removed
    dequeue(): string | undefined;
    //returns a list of all the items in the queue
    getQueue(): string[];
    //returns the number of items in the queue
    size(): number;
}

// Exporting variables and functions
export { IQueuable };