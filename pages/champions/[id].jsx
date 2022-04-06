import { useState } from 'react';
import { useRouter } from 'next/router';

// Components
import Image from 'next/image';
import { Tabs } from '@mantine/core';

// Custom Components
import Banner from '../../components/Banner/Banner';

// Icons
import { IconLayoutGrid } from '@tabler/icons';

// Other
import { data } from '../../constants';

// Functions
export const getStaticPaths = async () => {
  const res = await fetch(data.CHAMPIONS_URL);
  const champions = await res.json();

  const paths = champions.map((champion) => ({
    params: { id: champion.id.toString() },
  }));

  return { paths, fallback: false };
};

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champions/${params.id}.json`
  );
  const champion = await res.json();

  return {
    props: { champion },
  };
}

// Main Component
const Champion = ({ champion, children }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <>
      <Banner
        title={champion.name}
        description={champion.title}
        image={{
          src: `https://cdn.communitydragon.org/latest/champion/${champion.id}/splash-art/centered`,
          alt: champion.name,
        }}
      />

      <div>
        <h2>{champion.passive.name}</h2>

        <span>{champion.passive.description}</span>

        <Image
          src={`https://cdn.communitydragon.org/latest/champion/${champion.id}/ability-icon/p`}
          width={32}
          height={32}
        />
      </div>

      {/* <Tabs onTabChange={() => router.push(`${router.asPath}/skills`)} variant="pills">
        <Tabs.Tab label="Overview" icon={<IconLayoutGrid />}>
          Overview
        </Tabs.Tab>
        <Tabs.Tab label="Skills" icon={<IconLayoutGrid />}>
          Skills
        </Tabs.Tab>
        <Tabs.Tab label="Misc" icon={<IconLayoutGrid />}>
          Misc
        </Tabs.Tab>
      </Tabs> */}

      {children}
    </>
  );
};

export default Champion;
