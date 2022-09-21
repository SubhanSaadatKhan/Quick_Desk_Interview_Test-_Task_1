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

class Queue implements IQueuable {

    private container : string[] = [];

    enqueue(value: string): string[] {
        this.container.push(value);
        return this.container;
    }
    dequeue(): string | undefined {
        return this.container.shift();
    }
    getQueue(): string[] {
        return this.container;
    }
    size(): number {
        return this.container.length;
    }
    
}

class Stack implements IQueuable {

    private container : string[] = [];

    enqueue(value: string): string[] {
        this.container.push(value);
        return this.container;
    }
    dequeue(): string | undefined {
        return this.container.pop();
    }
    getQueue(): string[] {
        return this.container;
    }
    size(): number {
        return this.container.length;
    }
    
}

