(function () {
  // set up our new todo list
  @param { string } name // The name of the new todo list

  function Todo(name) {
    this.storage = new app.Store(name);
    this.model = new app.Model(this.storage);
    this.template = new app.Template();
    this.view = new app.View(this.template);
    this.controller = new app.Controller(this.model, this.view);
  }

  const todo = new Todo('Todo List');

  function setView() {
    todo.controller.setView(document.location.hash);
  }
});
