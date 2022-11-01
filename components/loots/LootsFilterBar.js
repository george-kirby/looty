import React, { useState, useEffect } from "react"
import { Checkbox, FormControl, FormControlLabel, Input, Button } from '@mui/material';


export default function LootsFilterBar( { allLootsData, activeFilters, setActiveFilters } ) {

    const highestValue = allLootsData.map(loot => loot.value).sort((a, b) => b - a)[0]
    const highestDistance = allLootsData.map(loot => loot.distance).sort((a, b) => b - a)[0]
    
    const [minValueField, setMinValueField] = useState(0)
    const [maxValueField, setMaxValueField] = useState(highestValue)
    const [minDistanceField, setMinDistanceField] = useState(0)
    const [maxDistanceField, setMaxDistanceField] = useState(highestDistance)


    const [allDangers, setAllDangers] = useState(() => {
        const allDangersInitial = []
        allLootsData.forEach(loot => {
            loot.dangers.forEach(danger => {
                if (!allDangersInitial.includes(danger)) { allDangersInitial.push(danger) }
            })
        })
        return allDangersInitial
    });

    const handleMinValueChange = (event) => {
        setMinValueField(parseInt(event.target.value) || 0)
    }

    const handleMaxValueChange = (event) => {
        setMaxValueField(parseInt(event.target.value) || 10000)
    }

    const applyValueFilter = () => {
        setActiveFilters({...activeFilters, minValue: minValueField, maxValue: maxValueField})
    }

    const handleMinDistanceChange = (event) => {
        setMinDistanceField(parseInt(event.target.value) || 0)
    }

    const handleMaxDistanceChange = (event) => {
        setMaxDistanceField(parseInt(event.target.value) || 1000)
    }

    const applyDistanceFilter = () => {
        setActiveFilters({...activeFilters, minDistance: minDistanceField, maxDistance: maxDistanceField})
    }

    const toggleDanger = (danger, value) => {
        const newUnwantedDangers = [...activeFilters.unwantedDangers]
        if (value) {
            newUnwantedDangers.push(danger)
        } else {
            const index = newUnwantedDangers.indexOf(danger);
                if (index > -1) { 
                    newUnwantedDangers.splice(index, 1);
                }
            }
        setActiveFilters({...activeFilters, unwantedDangers: newUnwantedDangers})
    }

    return (
        <div>
            <div className="value-input">
                <p>What value of loot are you looking for? (dubloons)</p>
                <div className="value-inputs-container">
                    <Input type="number" value={minValueField} min="0" max={highestValue} label="Min value (dubloons)" onChange={handleMinValueChange} />
                    <Input type="number" value={maxValueField} min="0" max={highestValue} label="Max value (dubloons)" onChange={handleMaxValueChange} />
                    <Button variant="contained" type="submit" onClick={applyValueFilter}>Apply</Button>
                </div>
            </div>
            <div className="distance-input">
                <p>How far will you sail? (nautical miles)</p>
                <div className="distance-inputs-container">
                    <Input type="number" value={minDistanceField} min="0" max={highestDistance} label="Min distance (nautical miles)" onChange={handleMinDistanceChange} />
                    <Input type="number" value={maxDistanceField} min="0" max={highestDistance} label="Max distance (nautical miles)" onChange={handleMaxDistanceChange} />
                    <Button variant="contained" type="submit" onClick={applyDistanceFilter}>Apply</Button>
                </div>
            </div>
            <div className="distance-input"></div>
            <div className="dangers-inputs">
                <p>Any dangers you can't face?</p>
                {allDangers.map((danger, index) => {
                    return (
                        <FormControlLabel key={index} control={<Checkbox />} label={danger} onChange={(event, value) => toggleDanger(danger, value)} />                
                    )
                })}
            </div>
        </div>
    )
}