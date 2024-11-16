import { Todo } from '@/entities/Task/model/types';
import { useTodoListStore } from '@/entities/Task/model/useTodoListStore';
import { FormControlLabel, Checkbox, Typography } from '@mui/material';
import { FC } from 'react';

interface IFeatureCompleteRow {
  todo: Todo;
}

export const FeatureCompleteRow: FC<IFeatureCompleteRow> = ({ todo }) => {
  const updateTodo = useTodoListStore((state) => state.updateTodo);

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={todo.completed}
          onChange={() => {
            const newTodoRow: Todo = {
              ...todo,
              completed: !todo.completed,
            };
            updateTodo(newTodoRow);
          }}
        />
      }
      label={<Typography component={'h3'}>{todo.title}</Typography>}
    />
  );
};
