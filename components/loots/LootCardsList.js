import LootCard from './LootCard'

export default function LootCardsList( { loots } ) {

    return (
        <div>
            {loots.map((loot) => {
                return (
                  <LootCard key={loot.id} loot={loot} />
                )
              })}
        </div>
    )
}