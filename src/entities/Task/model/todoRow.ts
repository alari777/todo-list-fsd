interface TodoRowConstructor {
  id: number;
  title: string;
  completed: boolean;
}

export class TodoRow {
  public readonly id: number;
  public readonly title: string;
  public readonly completed: boolean;

  public constructor(todoRow: TodoRowConstructor) {
    this.id = todoRow.id;
    this.title = todoRow.title;
    this.completed = todoRow.completed;
  }
}
