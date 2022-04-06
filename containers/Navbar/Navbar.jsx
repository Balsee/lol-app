import {
  useMantineColorScheme,
  Navbar as Navigation,
  ActionIcon,
  Group,
  Text,
  Header,
  Tooltip,
} from '@mantine/core';
import { IconHome, IconUsers, IconChartBar, IconTrophy, IconLayoutGrid } from '@tabler/icons';

import Link from 'next/link';

const Navbar = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Navigation py="md" height="calc(100vh - 78px)" width={{ base: 80 }}>
      <Group direction="column" align="center" position="center">
        <Navigation.Section component={Group} py="md" position="center">
          <Link href="/overview">
            <Tooltip label="Overview" position="right">
              <ActionIcon
                color="orange"
                size="xl"
                radius="md"
                variant={colorScheme === 'dark' ? 'light' : 'default'}
              >
                <IconLayoutGrid size={24} />
              </ActionIcon>
            </Tooltip>
          </Link>
          <Link href="/champions">
            <Tooltip label="Champions" position="right">
              <ActionIcon
                color="blue"
                size="xl"
                radius="md"
                variant={colorScheme === 'dark' ? 'light' : 'default'}
              >
                <IconUsers size={24} />
              </ActionIcon>
            </Tooltip>
          </Link>
          <Link href="/statistics">
            <Tooltip label="Statistics" position="right">
              <ActionIcon
                color="green"
                size="xl"
                radius="md"
                variant={colorScheme === 'dark' ? 'light' : 'default'}
              >
                <IconChartBar size={24} />
              </ActionIcon>
            </Tooltip>
          </Link>
          <Link href="/tournaments">
            <Tooltip label="Tournaments" position="right">
              <ActionIcon
                color="red"
                size="xl"
                radius="md"
                variant={colorScheme === 'dark' ? 'light' : 'default'}
              >
                <IconTrophy size={24} />
              </ActionIcon>
            </Tooltip>
          </Link>
        </Navigation.Section>
      </Group>
    </Navigation>
  );
};

export default Navbar;
