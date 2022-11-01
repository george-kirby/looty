import React, { useState, useEffect } from "react"
import { Checkbox, FormControlLabel } from '@mui/material';
import Layout from '../../components/layout';
import LootCardsList from '../../components/LootCardsList';

import loots from '../../data/lootsData'

export async function getStaticProps() {
    return {
      props: {
        allLootsData: loots
      },
    };
  }

export default function LootsIndex( { allLootsData }) {
    const [unwantedDangers, setUnwantedDangers] = useState([]);
    const [filteredLoots, setFilteredLoots] = useState(allLootsData);

    useEffect(() => {
        const newFilteredLoots = allLootsData.filter(loot => {
            return !loot.dangers.some(danger => unwantedDangers.includes(danger))
        })
        setFilteredLoots(newFilteredLoots)
        }, [unwantedDangers]);

    const toggleSnakes = (event, value) => {
        if (value) {
            setUnwantedDangers([...unwantedDangers, "snakes"])
        } else {
            const snakesAcceptable = [...unwantedDangers]
            const index = snakesAcceptable.indexOf("snakes");
                if (index > -1) { 
                    snakesAcceptable.splice(index, 1);
                }
            setUnwantedDangers(snakesAcceptable)
        }
    }

    // update loots accordingly
    // const applyChanges = () => {
    //     setFilteredLoots(filters)
    // }

    return (
        <Layout>
            <main>
            <FormControlLabel control={<Checkbox />} label="no snakes pls" onChange={toggleSnakes} />
            <LootCardsList loots={filteredLoots} />

            </main>
        </Layout>
    )
}