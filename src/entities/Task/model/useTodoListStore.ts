import { create } from 'zustand';
import { nanoid } from 'nanoid';
import { Todo } from './types';

interface ITodoList {
  todos: Array<Todo>;
  isLoading: boolean;
  getTodos: () => Promise<void>;
  addTodo: (title: string) => void;
  deleteTodo: (id: number | string) => void;
  updateTodo: (todo: Todo) => void;
}

export const useTodoListStore = create<ITodoList>((set) => ({
  todos: [],
  isLoading: false,
  getTodos: async (): Promise<void> => {
    set({ isLoading: true });
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos?_limit=5'
    );
    set({ todos: await response.json() });
    set({ isLoading: false });
  },
  addTodo: (title: string) =>
    set((state) => {
      const todo = { id: nanoid(), title, completed: false, userId: 1 };
      console.log(state.todos);
      return { todos: [...state.todos, todo] };
    }),
  deleteTodo: (id: number | string) =>
    set((state) => {
      const arr = state.todos.filter((item: any) => item.id !== id);
      return { todos: arr };
    }),
  updateTodo: (todo: Todo) =>
    set((state) => {
      const arr = state.todos.map((item: Todo) => {
        return item.id === todo.id ? todo : item;
      });
      return { todos: arr };
    }),
}));
