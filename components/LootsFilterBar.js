import React, { useState, useEffect } from "react"
import { Checkbox, FormControlLabel } from '@mui/material';


export default function LootsFilterBar( { allLootsData, activeFilters, setActiveFilters, unwantedDangers, setUnwantedDangers } ) {

    const [allDangers, setAllDangers] = useState(() => {
        const allDangersInitial = []
        allLootsData.forEach(loot => {
            loot.dangers.forEach(danger => {
                if (!allDangersInitial.includes(danger)) { allDangersInitial.push(danger) }
            })
        })
        return allDangersInitial
    });

    // const toggleDanger = (event, value) => {
    //     if (value) {
    //         setUnwantedDangers([...unwantedDangers, "snakes"])
    //         // setFilters({...setFilters, })
    //     } else {
    //         const snakesAcceptable = [...unwantedDangers]
    //         const index = snakesAcceptable.indexOf("snakes");
    //             if (index > -1) { 
    //                 snakesAcceptable.splice(index, 1);
    //             }
    //         setUnwantedDangers(snakesAcceptable)
    //     }
    // }

    const toggleSnakes = (event, value) => {
        console.log("🚀 ~ file: LootsFilterBar.js ~ line 21 ~ toggleSnakes ~ event", event)
        if (value) {
            setUnwantedDangers([...unwantedDangers, "snakes"])
            // setFilters({...setFilters, })
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
        <div>
            <FormControlLabel control={<Checkbox />} label="no snakes pls" onChange={toggleSnakes} />
        </div>
    )
}