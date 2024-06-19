class Stack {
    constructor() {
        this.items = [];  // Array to hold stack elements
    }

    // Push an element onto the stack
    push(element) {
        this.items.push(element);
    }

    // Remove the top element from the stack and return it
    pop() {
        if (this.isEmpty()) {
            return 'Stack is empty!';
        }
        return this.items.pop();
    }

    // Peek at the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return 'Stack is empty!';
        }
        return this.items[this.items.length - 1];
    }

    // Check if the stack is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the number of elements in the stack
    size() {
        return this.items.length;
    }

    // Clear the stack
    clear() {
        this.items = [];
    }

    // Print the elements of the stack
    print() {
        console.log(this.items.toString());
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    // Enqueue function to add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Dequeue function to remove and return the first element of the queue
    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items.shift();
    }

    // Peek function to view the first element of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        return this.items[0];
    }

    // Function to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Function to get the current size of the queue
    size() {
        return this.items.length;
    }

    // Function to clear the queue
    clear() {
        this.items = [];
    }
}
