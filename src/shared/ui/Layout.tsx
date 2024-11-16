import { AppBar, Container, Toolbar } from '@mui/material';
import Head from 'next/head';
import { type FC, ReactElement } from 'react';

interface ILayout {
  children: ReactElement;
}

export const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Head>
        <title>ToDo list</title>
      </Head>
      <AppBar
        position={'static'}
        sx={{ boxShadow: 'none', flexDirection: 'row' }}
      >
        <Container>
          <Toolbar
            sx={{ display: 'flex', justifyContent: 'space-between' }}
            disableGutters
          ></Toolbar>
        </Container>
      </AppBar>
      <Container className={'main-container'} id={'body'}>
        {children}
      </Container>
    </>
  );
};
