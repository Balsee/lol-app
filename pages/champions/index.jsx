import { useState, useEffect, useRef, forwardRef } from 'react';
import {
  Text,
  SimpleGrid,
  Autocomplete,
  Group,
  Avatar,
  Badge,
  MultiSelect,
  Select,
  Skeleton,
} from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

import ChampionCard from '../../components/ChampionCard/ChampionCard';

import { data } from '../../constants';

export const getServerSideProps = async () => {
  const res = await fetch(data.CHAMPIONS_URL);
  const champions = await res.json();

  return {
    props: {
      champions,
    },
  };
};

function getChampionImage(id) {
  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-icons/${id}.png`;
}

const CHAMPION_ROLES = ['mage', 'fighter', 'tank', 'assassin', 'support', 'marksman'];

const AutocompleteElement = forwardRef(({ value, image, roles, ...others }, ref) => (
  <div ref={ref} {...others}>
    <Group noWrap>
      <Avatar src={image} />

      <div>
        <Text>{value}</Text>
      </div>

      <Group spacing="xs" ml="auto" size="xs" color="dimmed">
        {roles.map((role) => (
          <Badge key={role}>{role}</Badge>
        ))}
      </Group>
    </Group>
  </div>
));

const Champions = ({ champions }) => {
  const ref = useRef();

  const championsData = champions.slice(1).map((champion) => ({
    value: champion.name,
    name: champion.name,
    id: champion.id,
    image: getChampionImage(champion.id),
    roles: champion.roles.map((role) => role),
  }));

  // LOADING SKELETON

  const [loading, setLoading] = useState(true);

  // CHAMPIONS SORTING

  const [searchName, setSearchName] = useState('');
  const [searchRoles, setSearchRoles] = useState([]);
  const [sort, setSort] = useLocalStorage({ key: 'sort', defaultValue: 'alphabetically' });

  const [filteredChampionsArray, setFilteredChampionsArray] = useState(championsData);

  useEffect(() => {
    setFilteredChampionsArray(
      championsData
        .filter((champion) => champion.name.toLowerCase().includes(searchName.toLowerCase()))
        .filter((champion) => searchRoles.every((role) => champion.roles.includes(role)))
        .sort(
          sort === 'alphabetically'
            ? (a, b) => a.name.localeCompare(b.name)
            : null || sort === 'date-n'
            ? (a, b) => b.id - a.id
            : null || sort === 'date-o'
            ? (a, b) => a.id - b.id
            : null
        )
    );

    if (loading === false) return;
    setLoading(false);
  }, [searchName, searchRoles, sort]);

  return (
    <>
      <Group position="apart" mb="md" grow>
        <Autocomplete
          ref={ref}
          label="Champions"
          placeholder="Pick one"
          width={192}
          radius="md"
          data={championsData.map((champion) => champion)}
          itemComponent={AutocompleteElement}
          onChange={setSearchName}
          onItemSubmit={(e) => setSearchName(e.value)}
          styles={{
            dropdown: {
              borderRadius: '8px',
            },
          }}
        />

        <MultiSelect
          data={CHAMPION_ROLES}
          label="Roles"
          radius="md"
          placeholder="Pick all that you like"
          clearable
          onChange={(value) => setSearchRoles(value)}
          styles={{
            item: { textTransform: 'capitalize' },
            values: { textTransform: 'capitalize' },
            dropdown: {
              borderRadius: '8px',
            },
          }}
        />

        <MultiSelect
          data={[
            { value: 'easy', label: 'Easy' },
            { value: 'medium', label: 'Medium' },
            { value: 'hard', label: 'Hard' },
          ]}
          label="Difficulty"
          radius="md"
          placeholder="Pick all that you like"
          clearable
          styles={{
            item: { textTransform: 'capitalize' },
            values: { textTransform: 'capitalize' },
            dropdown: {
              borderRadius: '8px',
            },
          }}
        />

        <Select
          label="Sort by"
          placeholder="Pick one"
          radius="md"
          data={[
            { value: 'alphabetically', label: 'Alphabetically' },
            { value: 'date-n', label: 'Date Added (Newest First)' },
            { value: 'date-o', label: 'Date Added (Oldest First)' },
            { value: 'difficulty', label: 'Difficulty' },
          ]}
          defaultValue={sort}
          onChange={(e) => setSort(e)}
          styles={(theme) => ({
            dropdown: {
              borderRadius: '8px',
            },
          })}
        />
      </Group>

      <SimpleGrid cols={4} gutter="md">
        {loading ? (
          <>
            {Array(28)
              .fill(null)
              .map((element, key) => (
                // ADD SMALLER ELEMENTS IN THE SKELETON (LIKE IMAGE)
                <Skeleton radius="md" key={key} height={96} />
              ))}
          </>
        ) : (
          filteredChampionsArray.map((champion) => <ChampionCard key={champion.id} {...champion} />)
        )}

        {filteredChampionsArray.length === 0 ? (loading ? null : `Nothing's here...`) : null}
      </SimpleGrid>
    </>
  );
};

export default Champions;
