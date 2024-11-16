import { TodoRow } from './todoRow';

export class TodoList {
  public readonly todoList: Array<TodoRow>;

  public constructor(todoList: Array<TodoRow>) {
    this.todoList = todoList.map((todo: TodoRow) => {
      return new TodoRow(todo);
    });
  }
}
