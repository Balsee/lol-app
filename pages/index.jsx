import { Button, useMantineColorScheme } from '@mantine/core';

export default function Home() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Button
      size="big"
      onClick={() => toggleColorScheme()}
      color={colorScheme === 'dark' ? 'red' : 'teal'}
    >
      {colorScheme}
    </Button>
  );
}
