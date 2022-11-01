import React, { useState, useEffect } from "react"
import Layout from '../../components/layout';
import LootCardsList from '../../components/LootCardsList';
import LootsFilterBar from '../../components/LootsFilterBar';

import loots from '../../data/lootsData'

export async function getStaticProps() {
    return {
      props: {
        allLootsData: loots
      },
    };
  }

export default function LootsIndex( { allLootsData }) {
    const [activeFilters, setActiveFilters] = useState({
        minValue: 0,
        maxValue: 10000,
        minDistance: 0,
        maxDistance: 1000,
        unwantedDangers: []
    });
    const [filteredLoots, setFilteredLoots] = useState(allLootsData);

    useEffect(() => {
        console.log("useEffect triggered")
        const newFilteredLoots = allLootsData.filter(loot => {
            const valueOk = (loot.value >= activeFilters.minValue) && (loot.value <= activeFilters.maxValue)
            const dangersOk = !loot.dangers.some(danger => activeFilters.unwantedDangers.includes(danger))
            return (valueOk && dangersOk)
            // return dangersOk && distanceOk && valueOk
        })
        setFilteredLoots(newFilteredLoots)
        }, [activeFilters]);

    return (
        <Layout>
            <main>
            <LootsFilterBar { ...{ allLootsData, activeFilters, setActiveFilters } }/>
            <LootCardsList loots={filteredLoots} />

            </main>
        </Layout>
    )
}