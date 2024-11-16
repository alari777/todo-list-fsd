import { useTodoListStore } from '@/entities/Task/model/useTodoListStore';
import { Button } from '@mui/material';
import { FC } from 'react';

interface IFeatureDeleteRow {
  id: number | string;
}

export const FeatureDeleteRow: FC<IFeatureDeleteRow> = ({ id }) => {
  const deleteTodo = useTodoListStore((state) => state.deleteTodo);

  if (!id) return <>Sorry ..</>;

  return (
    <Button variant={'contained'} onClick={() => deleteTodo(id)}>
      Delete Row
    </Button>
  );
};
