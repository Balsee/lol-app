import Link from 'next/link';
import Image from 'next/image';

import { Card, Avatar, Group, Title, Badge } from '@mantine/core';

const ChampionCard = ({ name, id, image, roles }) => {
  return (
    <Link href={`/champions/${id}`}>
      <Card withBorder radius="md" p="md">
        <Group align="flex-start" position="apart">
          <Avatar radius="md" p="0">
            <Image src={image} width={48} height={48} />
          </Avatar>
          <Group spacing="0.5rem">
            {roles.map((role) => (
              <Badge key={role}>{role}</Badge>
            ))}
          </Group>
        </Group>
        <Group>
          <Title order={3}>{name}</Title>
        </Group>
      </Card>
    </Link>
  );
};

export default ChampionCard;
