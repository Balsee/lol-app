// Custom Components
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Banner from '../../components/Banner/Banner';

const ChampionLayout = ({ children }) => {
  const [loading, setLoading] = useState(false);

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

      {children}
    </>
  );
};

export default Champion;
