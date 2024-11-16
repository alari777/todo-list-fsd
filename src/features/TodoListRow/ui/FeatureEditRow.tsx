import { Todo } from '@/entities/Task/model/types';
import { useTodoListStore } from '@/entities/Task/model/useTodoListStore';
import { Button } from '@mui/material';
import React, { FC } from 'react';

interface IFeatureEditRow {
  todo: Todo;
}

export const FeatureEditRow: FC<IFeatureEditRow> = ({ todo }) => {
  const updateTodo = useTodoListStore((state) => state.updateTodo);

  const handleEditTodo = (): void => {
    const newTitle = prompt('Enter new title please', '');
    if (newTitle) {
      const newTodo: Todo = { ...todo, title: newTitle };
      updateTodo(newTodo);
    }
  };

  if (!todo) return <>Sorry ..</>;

  return (
    <Button variant={'contained'} onClick={() => handleEditTodo()}>
      Edit Row
    </Button>
  );
};
