const todoList = {
  todos: [],
  display() {
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
      return;
    }
    console.log('My Todos');
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].done) {
        console.log('(x)', this.todos[i].item);
      } else {
        console.log('()', this.todos[i].item);
      }
    }
  },
  add(item) {
    this.todos.push({
      item,
      done: false,
    });
  },
  update(i, newItem) {
    this.todos[i].item = newItem;
    this.display();
  },
  remove(i) {
    this.todos.splice(i, 1);
    this.display();
  },
  toggleOne(i) {
    this.todos[i].done = !this.todos.done;
    this.display();
  },
  toggleAll() {
    for (let i = 0; i < this.todos.length; i++) {
      // if everything is true, make everything false
      
      // else, everything true
    }
  }
};
