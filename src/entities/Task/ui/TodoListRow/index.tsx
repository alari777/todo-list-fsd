import Grid from '@mui/material/Unstable_Grid2';
import React, { FC, ReactElement } from 'react';

interface ITodoListRow {
  featureEditRow: ReactElement;
  featureDeleteRow: ReactElement;
  featureCompleteRow: ReactElement;
}

export const TodoListRow: FC<ITodoListRow> = ({
  featureEditRow,
  featureDeleteRow,
  featureCompleteRow,
}) => {
  return (
    <Grid xs={12} mb={2} container>
      <Grid xs={6}>{featureCompleteRow}</Grid>
      <Grid xs={3}>{featureEditRow}</Grid>
      <Grid xs={3}>{featureDeleteRow}</Grid>
    </Grid>
  );
};
