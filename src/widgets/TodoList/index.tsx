import { Todo } from '@/entities/Task/model/types';
import { useTodoListStore } from '@/entities/Task/model/useTodoListStore';
import { TodoListRow } from '@/entities/Task/ui/TodoListRow';

import {
  FeatureAddTodo,
  FeatureCompleteRow,
  FeatureDeleteRow,
  FeatureEditRow,
} from '@/features/TodoListRow';
import { useEffect } from 'react';

export const WidgetsTodoList = () => {
  const { getTodos, todos, isLoading } = useTodoListStore((state) => ({
    isLoading: state.isLoading,
    getTodos: state.getTodos,
    todos: state.todos,
  }));

  useEffect(() => {
    getTodos();
  }, []);

  if (isLoading) return <>Loading ...</>;

  return (
    <>
      {todos &&
        todos.map((todoRow: Todo) => {
          return (
            <TodoListRow
              featureEditRow={<FeatureEditRow todo={todoRow} />}
              featureDeleteRow={<FeatureDeleteRow id={todoRow.id} />}
              featureCompleteRow={<FeatureCompleteRow todo={todoRow} />}
            />
          );
        })}
      <FeatureAddTodo />
    </>
  );
};
