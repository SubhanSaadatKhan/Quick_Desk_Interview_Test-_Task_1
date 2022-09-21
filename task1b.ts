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
    private containerCount : number = 0
    private removedCount : number = 0

    enqueue(value: string): string[] {
        this.container[this.containerCount++] = value
        const displayQueue : string[] = []
        for(let i = this.removedCount; i < this.containerCount; i++){
            displayQueue[i-this.removedCount] = this.container[i]
        }
        return displayQueue
    }
    dequeue(): string | undefined {
        return this.containerCount>this.removedCount ? this.container[this.removedCount++] : undefined
    }
    getQueue(): string[] {
        const displayQueue : string[] = []
        for(let i = this.removedCount; i < this.containerCount; i++){
            displayQueue[i-this.removedCount] = this.container[i]
        }
        return displayQueue
    }
    size(): number {
        const length = this.containerCount-this.removedCount
        return length
    }
    
}

class Stack implements IQueuable {

    private container : string[] = [];
    private containerCount : number = 0

    enqueue(value: string): string[] {
        this.container[this.containerCount++] = value
        return this.container
    }
    dequeue(): string | undefined {
        const removedVal = this.containerCount? this.container[this.containerCount-1]: undefined
        this.containerCount-=1
        const newLst : string[] = []
        for(let i=0; i<this.containerCount;i++){
            newLst[i] = this.container[i]
        }
        this.container = newLst
        return removedVal
    }
    getQueue(): string[] {
        return this.container
    }
    size(): number {
        const length = this.containerCount
        return length
    }
    
}