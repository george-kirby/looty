import React, { useState, useEffect } from "react"
import { Checkbox, FormControl, FormControlLabel, Input, Button } from '@mui/material';


export default function LootsFilterBar( { allLootsData, activeFilters, setActiveFilters } ) {
    
    const [minValueField, setMinValueField] = useState(0)
    const [maxValueField, setMaxValueField] = useState(10000)


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
        console.log("running applyValueFilter")
        setActiveFilters({...activeFilters, minValue: minValueField, maxValue: maxValueField})
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
                <p>What value of loot are you looking for?</p>
                <div className="value-inputs-container">
                    <FormControl>
                        <Input type="number" min="0" max="10000" label="Min value (dubloons)" onChange={handleMinValueChange} />
                        <Input type="number" min="0" max="10000" label="Max value (dubloons)" onChange={handleMaxValueChange} />
                        <Button variant="contained" type="submit" onClick={applyValueFilter}>Apply</Button>
                    </FormControl>

                </div>
            </div>
            <div className="distance-input"></div>
            <div className="dangers-inputs">
                <p>What dangers can't you face?</p>
                {allDangers.map((danger, index) => {
                    return (
                        <FormControlLabel key={index} control={<Checkbox />} label={danger} onChange={(event, value) => toggleDanger(danger, value)} />                
                    )
                })}
            </div>
        </div>
    )
}