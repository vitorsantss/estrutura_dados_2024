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

    contarNos(node = this.root) {
        if (node === null) {
            return 0;
        }
        return 1 + this.contarNos(node.left) + this.contarNos(node.right);
    }

    contarFolhas(node = this.root) {
        if (node === null) {
            return 0;
        }
        if (node.left === null && node.right === null) {
            return 1;
        }
        return this.contarFolhas(node.left) + this.contarFolhas(node.right);
    }
}