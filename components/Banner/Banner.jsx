import { Group, Image, Title, Text } from '@mantine/core';

const Banner = ({ title, description, image }) => {
  return (
    <Group direction="column" position="left" align="left">
      <Image
        height={256}
        radius="md"
        src={image.src}
        alt={image.alt}
        styles={{
          image: {
            objectPosition: '0 20%',
          },
        }}
      />

      <Title>{title}</Title>
      {description ? <Text>{description}</Text> : null}
    </Group>
  );
};

export default Banner;
