import { useState } from 'react';

import { Group, Image, BackgroundImage, Title, Text, Stack, ColorSwatch } from '@mantine/core';

import { usePalette } from 'react-palette';

const Banner = ({ title, description, image }) => {
  const [colors, setColors] = useState([]);

  const { data, loading, error } = usePalette(image.src);

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
            maskImage: 'linear-gradient(to bottom, black -50%, transparent 90%)',
            filter: 'saturate(0.5)',
          },
        }}
      />

      <Stack
        align="flex-start"
        justify="flex-start"
        spacing={0}
        sx={(theme) => ({
          position: 'absolute',
          top: '2rem',
          left: '2rem',
          color: `${theme.colorScheme === 'dark' ? data.lightVibrant : 'white'}`,
          textShadow: `${
            theme.colorScheme === 'dark'
              ? `0 0 10px ${data.vibrant} , 0 0 15px hsla(0, 0%, 0%, 0.75)`
              : '0 0 10px hsla(0, 0%, 0%, 0.75)'
          }`,

          h1: {
            fontSize: '4rem',
          },

          '> div': {
            fontSize: '2rem',
            fontWeight: '600',

            '&:first-letter': {
              textTransform: 'capitalize',
            },
          },
        })}
      >
        <Title>{title}</Title>
        {description ? <Text>{description}</Text> : null}
      </Stack>
    </Group>
  );
};

export default Banner;
