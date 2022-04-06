import {
  useMantineColorScheme,
  Navbar as Navigation,
  ActionIcon,
  Group,
  Text,
  Header,
} from '@mantine/core';
import { IconHome, IconUsers, IconChartBar, IconBrandAsana } from '@tabler/icons';

import Link from 'next/link';

const Navbar = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Navigation py="md" height="calc(100vh - 78px)" width={{ base: 80 }}>
      <Group direction="column" align="center" position="center">
        <Navigation.Section component={Group} py="md" position="center">
          <Link href="/">
            <ActionIcon
              color="orange"
              size="xl"
              radius="md"
              variant={colorScheme === 'dark' ? 'light' : 'default'}
            >
              <IconHome size={24} />
            </ActionIcon>
          </Link>
          <Link href="/champions">
            <ActionIcon
              color="blue"
              size="xl"
              radius="md"
              variant={colorScheme === 'dark' ? 'light' : 'default'}
            >
              <IconUsers size={24} />
            </ActionIcon>
          </Link>
          <Link href="/statistics">
            <ActionIcon
              color="green"
              size="xl"
              radius="md"
              variant={colorScheme === 'dark' ? 'light' : 'default'}
            >
              <IconChartBar size={24} />
            </ActionIcon>
          </Link>
        </Navigation.Section>
      </Group>
    </Navigation>
  );
};

export default Navbar;
