import Image from 'next/image';

export default function LootCard( { loot } ) {
    const image = loot.image || { src: `/images/islands/EmeraldIsle.png`, alt: "Emerald Isle" }

    return (
        <div>
            <Image
              priority
              src={image.src}
              height={144}
              width={144}
              alt={image.alt}
            />
            <h3>{loot.title}</h3>
            <ul>
                <li>{loot.distance} km</li>
                <li>{loot.value} dubloons</li>
            </ul>
        </div>
    )
}
