// O(1) creation time
function ImmutableBST (value, left, right) {
  this.value = value;
  this.left = left || null;
  this.right = right || null;
  this.size = 1 + (left && left.size || 0) + (right && right.size || 0); // cannot get property size of null
}
// O(log n) insertion time
ImmutableBST.prototype.insert = function (value) {
  const newValue = this.value;
  let newLeft, newRight;
  if (value <= this.value) {
    newRight = this.right;
    // clone the left node with the value inserted
    // or create a fresh left node if one does not already exist
    newLeft = (this.left ? this.left.insert(value) : new ImmutableBST(value));
  } else {
    newLeft = this.left;
    // clone the right node with the value inserted
    // or create a fresh right node if one does not already exist
    newRight = (this.right ? this.right.insert(value) : new ImmutableBST(value));
  }
  // clone this node with the same value and either a new left child or a new right child (depending on above)
  return new ImmutableBST(newValue, newLeft, newRight);
};
// O(log n) retrieval time
ImmutableBST.prototype.contains = function (value) {
  if (this.value === value) return true;
  if (value < this.value) {
    return !!this.left && this.left.contains(value);
  } else {
    return !!this.right && this.right.contains(value);
  }
};

// optional from here on
ImmutableBST.prototype.min = function () {
  if (!this.left) return this.value;
  else return this.left.min();
};
ImmutableBST.prototype.max = function () {
  if (!this.right) return this.value;
  else return this.right.max();
};
// O(log n) removal time
ImmutableBST.prototype.remove = function (value) {
  if (this.value === value) {
    // if we have matched, distinguish between three different cases
    if (this.left && this.right) { // case 1: the node has both children
      let newValue, newLeft, newRight;
      // remove a value from the "fuller" child
      // we will use that value as the value for our new node
      if (this.left.size > this.right.size) {
        newRight = this.right;
        // get the largest of the smaller child
        newValue = this.left.max();
        newLeft = this.left.remove(newValue);
      } else {
        newLeft = this.left;
        // get the smallest of the larger child
        newValue = this.right.min();
        newRight = this.right.remove(newValue);
      }
      return new ImmutableBST(newValue, newLeft, newRight);
    } else if (!this.left && !this.right) { // case 2: the node has no children
      // easy, if a node has no children its parent should replace it with null
      return null;
    } else { // case 3: the node has one child
      // also easy, if a node has one child, its parent should replace it with that child
      return this.left || this.right;
    }
  } else {
    // we have not yet found the given value to remove, continue recursing
    const newValue = this.value;
    let newLeft, newRight;
    if (value < this.value) {
      newRight = this.right;
      // clone the left node with the value removed
      // or if there is no left node, stop recursing
      newLeft = (this.left ? this.left.remove(value) : null);
    } else {
      newLeft = this.left;
      // clone the right node with the value removed
      // or if there is no right node, stop recursing
      newRight = (this.right ? this.right.remove(value) : null);
    }
    // clone this node with the same value and either a new left child or a new right child (depending on above)
    return new ImmutableBST(newValue, newLeft, newRight);
  }
};


// Examples
const bstA = new ImmutableBST(5);
const bstB = bstA.insert(6);
console.log(bstA); // contains only 5, NOT 6
console.log(bstB); // contains 5 and 6

// More examples:
const bst = new ImmutableBST(5);
const bstMore = bst.insert(4).insert(3).insert(1).insert(10).insert(11).insert(15).insert(2).insert(100);
console.log(bstMore.contains(5)); // true)
console.log(bstMore.contains(3)); // true
console.log(bstMore.contains(11)); // true
console.log(bstMore.contains(12)); // false
console.log(bst === bstMore); // false, because of immutability
