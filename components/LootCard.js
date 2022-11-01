import { Card } from '@mui/material';
import Image from 'next/image';

export default function LootCard( { loot } ) {
    const image = loot.image || { src: `/images/islands/EmeraldIsle.png`, alt: "Emerald Isle" }

    return (
        <Card variant="outlined">
            {/* <Image
              priority
              src={image.src}
              height={20}
              width={20}
              alt={image.alt}
            /> */}
            <h3>{loot.title}</h3>
            <ul>
                <li>{loot.distance} km</li>
                <li>{loot.value} dubloons</li>
            </ul>
            <ul className="dangers-list">
            {loot.dangers.map((danger, index) => {
                return (
                  <li key={index}>{danger}</li>
                )
              })}
            </ul>
        </Card>
    )
}
