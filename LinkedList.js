const Node = require('./Node');

class LinkedList {
    constructor (head = null) {
        this.head = head;
    }

    size () {
        if (this.head === null) {
            return 0;
        }
        let count = 0;
        let current = this.head;

        while(current.next !== null) {
            count++;
            current = current.next;
        }

        return count;
    }

    head () {
        return this.head;
    }

    tail () {
        if (this.head === null) {
            return null;
        }
        let tail = this.head;
        while (tail.next !== null) {
            tail = tail.next;
        }
        return tail;
    }

    at (index) {
        if (this.head === null) {
            return null;
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            if (current.next !== null) {
                current = current.next;
            }
        }
        return current;
    }

    insertAt (value, index) {
        if (this.head === null) {
            return this.head;
        }

        if (index > this.size()) {
            this.append(value);
            return this.toString();
        }

        if (index === 0) {
            this.prepend(value);
            return this.toString();
        }

        const current = this.at(index - 1);
        const node = new Node(value);
        node.next = current.next;
        current.next = node;
        return this.toString();
    }

    removeAt (index) {
        if (this.head === null) {
            return null;
        }

        if (index > this.size()) {
            return this.toString();
        }

        if (index === 0) {
            this.head = this.head.next;
            return this.toString();
        }

        let prev = this.at(index - 1);
        let current = this.at(index);
        prev.next = current.next;
        return this.toString();
    }

    append (value) {
        if (this.head === null) {
            this.head = new Node(value);
            return this;
        }
        let tail = this.tail();
        tail.next = new Node(value);
    }

    prepend (value) {
        if (this.head === null) {
          this.head = new Node(value);
          return this;
        }
        const prev = this.head;
        this.head = new Node(value, prev);
    }

    contains (value) {
        if (this.head === null) {
            return null;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.value === value) {
                return true;
            }
            current = current.next;
        }
        if (current.value === value) {
            return true;
        } else {
            return false;
        }
    }

    find (value) {
        if (this.head === null) {
            return null;
        }
        let current = this.head;
        let count = 0;
        while (current.next !== null) {
            if (current.value === value) {
                return count;
            }
            count++;
            current = current.next;
        }
        if (current.value === value) {
            return count;
        } else {
            return null;
        }
    }

    toString () {
        if (this.head === null) {
            return 'null';
        }
        let current = this.head;
        let result = '';
        while (current.next !== null) {
            result = `${result} (${current.value}) ->`;
            current = current.next;
        }

        return `${result} (${current.value}) -> null`;
    }
}

const list = new LinkedList(); // Creates a new linked list
list.append('John'); // Appends John first
list.append('Sarah'); // Appends Sarah next
list.append('Antonio'); // Appends Antonio next
list.prepend('Dave'); // Prepends Dave at the start
list.insertAt('Brandon', 2); // Inserts Brandon at index 2
list.removeAt(2); // Removes Brandon at index 2
list.insertAt('Ronald', 3); // Inserts Ronald at index 3

console.log(list.toString()); // Prints out (Dave) -> (John) -> (Sarah) -> (Ronald) -> (Antonio) -> null
console.log(list.at(2)); // Prints out Sarah
console.log(list.size()); // Prints out 4
console.log(list.find('John')); // Prints out 1

// Pretty neat stuff!