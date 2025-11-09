let _count = new WeakMap();

class Stack {
    constructor(){
        this.stack = [];
        _count.set(this, this.stack.length);
    }
    get count(){
        return _count.get(this);
    }

    peek() {
        if(this.stack.length < 1)
            throw new Error('Stack is empty');

        return this.stack[this.stack.length - 1];
    }
    push(obj) {
        this.stack.push(obj);
    }

    pop(){
        if(this.stack.length < 1)
            throw new Error('Stack is emptyyyy');
        return this.stack.pop();

    }
}

const stack = new Stack();
stack.push('a');