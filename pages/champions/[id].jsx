import { useState } from 'react';

import { data } from '../../constants';

import Banner from '../../components/Banner/Banner';

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

const Champion = ({ champion }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Banner
        title={champion.name}
        description={champion.title}
        image={{
          src: `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/uncentered/${champion.id}/${champion.skins[0].id}.jpg`,
          alt: champion.name,
        }}
      ></Banner>
    </div>
  );
};

export default Champion;
