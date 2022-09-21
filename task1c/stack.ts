import { IQueuable } from "./interface";

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

const s = new Stack()