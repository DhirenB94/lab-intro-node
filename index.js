class SortedList {
  constructor() {
    this.items = [];
    this.length= this.items.length;
  }
  

  add(item) {
    this.items.push(item);
    this.items.sort(function(a, b) {
      return a - b;
    });
    this.length= this.items.length
  } 

  get(pos) {
    if (pos > this.items.length - 1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos] //[pos] represents eg [0]
    }
  }

  max() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
     return Math.max(...this.items)
    }
  }

  min() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce(function(a, b) {
        return Math.min(a, b); //this return is part of reduce
      })
    }
  }

  sum() {
    if (this.items.length === 0) {
      return 0
    } else {
      return this.items.reduce(function(a, b) {
        return a + b;
      })
    }
  }

  avg() {
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items.reduce((a, b) => (a + b)) / this.items.length;
    }
  }
}

module.exports = SortedList;