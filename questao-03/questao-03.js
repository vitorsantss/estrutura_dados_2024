class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export default class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(value) {
        if (this.root === null) {
            this.root = new Node(value);
        } else {
            let node = this.root;
            while (true) {
                if (value < node.value) {
                    if (node.left === null) {
                        node.left = new Node(value);
                        break;
                    } else {
                        node = node.left;
                    }
                } else {
                    if (node.right === null) {
                        node.right = new Node(value);
                        break;
                    } else {
                        node = node.right;
                    }
                }
            }
        }
    }

    min() {
        return this.minNode(this.root);
    }

    minNode(node) {
        if (node == null) {
            return null;
        }

        while (true) {
            if (node.left !== null) {
                node = node.left;
            } else {
                return node.value;
            }
        }
    }

    max() {
        return this.maxNode(this.root);
    }

    maxNode(node) {
        if (node == null) {
            return null;
        }

        while (true) {
            if (node.right !== null) {
                node = node.right;
            } else {
                return node.value;
            }
        }
    }
}