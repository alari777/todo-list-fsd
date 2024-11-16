import { useTodoListStore } from '@/entities/Task/model/useTodoListStore';
import { Button, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { useState } from 'react';

export const FeatureAddTodo = () => {
  const [todo, setTodo] = useState('');
  const addTodo = useTodoListStore((state) => state.addTodo);

  return (
    <Grid xs={12} mb={2} mt={10} container>
      <Grid xs={9}>
        <TextField
          type={'text'}
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </Grid>
      <Grid xs={3}>
        <Button variant={'contained'} onClick={() => addTodo(todo)}>
          Add Row
        </Button>
      </Grid>
    </Grid>
  );
};
