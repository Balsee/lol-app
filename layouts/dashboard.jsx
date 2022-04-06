import { AppShell, Footer, ScrollArea, useMantineColorScheme } from '@mantine/core';
import { useHotkeys } from '@mantine/hooks';

import Header from '../containers/Header/Header';
import Navbar from '../containers/Navbar/Navbar';

const Dashboard = (props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  useHotkeys([['mod+J', () => toggleColorScheme()]]);

  return (
    <AppShell
      header={<Header />}
      navbar={<Navbar />}
      styles={{ main: { height: 'calc(100vh - 78px)' } }}
    >
      <ScrollArea type="scroll" style={{ height: '100%' }} scrollHideDelay={50}>
        {props.children}
      </ScrollArea>
    </AppShell>
  );
};

export default Dashboard;
