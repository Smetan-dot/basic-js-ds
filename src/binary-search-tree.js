const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.main = null;
  }

  root() {
    if(!this.main) return null;
    else return this.main;
  }

  add(data) {
    this.main = addElement(this.main, data);

    function addElement(node, data) {
      if(!node) return new Node(data);
      if(node.data === data) return node;
      if(data < node.data) node.left = addElement(node.left, data);
      if(data > node.data) node.right = addElement(node.right, data);

      return node;
    }
  }

  has(data) {
    return searchElement(this.main, data);

    function searchElement(node, data) {
      if(!node) return false;
      if(node.data === data) return true;
      if(data < node.data) return searchElement(node.left, data);
      if(data > node.data) return searchElement(node.right, data);
    }
  }

  find(data) {
    return findElement(this.main, data);

    function findElement(node, data) {
      if(!node) return null;
      if(node.data === data) return node;
      if(data < node.data) return findElement(node.left, data);
      if(data > node.data) return findElement(node.right, data);
    }
  }

  remove(data) {
    this.main = removeElement(this.main, data);

    function removeElement(node, data) {
      if(!node) return null;
      if(data < node.data) {
        node.left = removeElement(node.left, data);
        return node;
      }
      if(data > node.data) {
        node.right = removeElement(node.right, data);
        return node;
      }
      if(data === node.data) {
        if(!node.left && !node.right) return null;
        if(!node.left) {
          node = node.right;
          return node;
        }
        if(!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeElement(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.main) return;

    let node = this.main;
    while(node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if(!this.main) return;

    let node = this.main;
    while(node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};