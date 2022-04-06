import {
  Header as MantineHeader,
  Text,
  Box,
  Group,
  ActionIcon,
  Kbd,
  useMantineColorScheme,
  TextInput,
} from '@mantine/core';

import { IconMoon, IconSun, IconSearch, IconBell, IconBrandAsana } from '@tabler/icons';

const Header = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <MantineHeader>
      <Group p="md" align="center" position="right">
        <ActionIcon mr="auto" size={44} variant="transparent">
          <IconBrandAsana size={44} />
        </ActionIcon>
        <TextInput
          placeholder="Search"
          icon={<IconSearch size={16} />}
          radius="md"
          rightSectionWidth={82}
          rightSection={
            <Kbd
              sx={(theme) => ({
                width: '70px',
                height: '24px',
                textAlign: 'center',
                border: 'none',
                background:
                  theme.colorScheme === 'dark' ? theme.colors.gray[9] : theme.colors.gray[1],
                outline: theme.colorScheme === 'dark' ? 'none' : `1px solid${theme.colors.gray[3]}`,
              })}
            >
              Ctrl + K
            </Kbd>
          }
          styles={{ rightSection: { pointerEvents: 'none' } }}
        />

        <ActionIcon
          color="gray"
          size="lg"
          radius="md"
          variant={colorScheme === 'dark' ? 'filled' : 'default'}
        >
          <IconBell size={20} />
        </ActionIcon>
        <ActionIcon
          color="gray"
          size="lg"
          radius="md"
          variant={colorScheme === 'dark' ? 'filled' : 'default'}
          onClick={() => toggleColorScheme()}
        >
          {colorScheme === 'dark' ? <IconMoon size={20} /> : <IconSun size={20} />}
        </ActionIcon>
      </Group>
    </MantineHeader>
  );
};

export default Header;
