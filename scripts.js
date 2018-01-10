const todoList = {
  todos: [],
  add(item) {
    this.todos.push({
      item,
      done: false,
    });
  },
  update(i, newItem) {
    this.todos[i].item = newItem;
  },
  remove(i) {
    this.todos.splice(i, 1);
  },
  toggleOne(i) {
    this.todos[i].done = !this.todos.done;
  },
  toggleAll() {
    let count = 0;
    // get number of completed tasks
    for (let i = 0; i < this.todos.length; i++) {
      if (this.todos[i].done === true) {
        count++;
      }
    }
    // if every task is done, clear done on all tasks
    if (count === this.todos.length) {
      for (let i = 0; i < this.todos.length; i++) {
        this.todos[i].done = false;
      }
    } else {
      for (let i = 0; i < this.todos.length; i++) {
        this.todos[i].done = true;
      }
    }
  },
};

// HTML elements to select
const toggleAll = document.getElementById('toggleAll');
const addTodo = document.getElementById('addTodo');
const todoUpdate = document.getElementById('todoUpdate');
const deleteTodo = document.getElementById('deleteTodo');
const toggleTodo = document.getElementById('toggleTodo');
const view = {
  display() {
    const todoUl = document.querySelector('#todo');
    todoUl.innerHTML = '';

    todoList.todos.forEach(todo => {
      const todoLi = document.createElement('li');
      let content = '';

      if (todo.done === true) {
        content = `(x) ${todo.item}`;
      } else {
        content = `() ${todo.item}`;
      }
      todoLi.textContent = content;
      todoUl.appendChild(todoLi);
    });
  },
};

// All event listeners
addTodo.addEventListener('click', () => {
  const addTodoInput = document.getElementById('addTodoInput');

  todoList.add(addTodoInput.value);
  addTodoInput.value = '';
  view.display();
});

todoUpdate.addEventListener('click', () => {
  const positionUpdate = document.getElementById('positionUpdate');
  const textUpdate = document.getElementById('textUpdate');

  todoList.update(positionUpdate.valueAsNumber, textUpdate.value);
  positionUpdate.value = '';
  textUpdate.value = '';
  view.display();
});

deleteTodo.addEventListener('click', () => {
  const deleteInput = document.getElementById('deleteInput');

  todoList.remove(deleteInput.valueAsNumber);
  deleteInput.value = '';
  view.display();
});

toggleTodo.addEventListener('click', () => {
  const toggleInput = document.getElementById('toggleInput');

  todoList.toggleOne(toggleInput.valueAsNumber);
  toggleTodo.value = '';
  view.display();
});

toggleAll.addEventListener('click', () => {
  todoList.toggleAll();
  view.display();
});
