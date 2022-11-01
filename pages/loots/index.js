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
        maxValue: null,
        minDistance: 0,
        maxDistance: null,
        unwantedDangers: []
    });
    const [unwantedDangers, setUnwantedDangers] = useState([]);
    const [filteredLoots, setFilteredLoots] = useState(allLootsData);

    useEffect(() => {
        const newFilteredLoots = allLootsData.filter(loot => {
            const dangersOk = !loot.dangers.some(danger => unwantedDangers.includes(danger))
            return dangersOk
            // return dangersOk && distanceOk && valueOk
        })
        setFilteredLoots(newFilteredLoots)
        // when LootsFilterBar applies changes for all filters, not just unwantedDangers
        // }, [newFilters]);
        }, [unwantedDangers]);

    return (
        <Layout>
            <main>
            <LootsFilterBar { ...{ allLootsData, activeFilters, setActiveFilters, unwantedDangers, setUnwantedDangers } }/>
            <LootCardsList loots={filteredLoots} />

            </main>
        </Layout>
    )
}