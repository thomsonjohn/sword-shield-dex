import React, { useState, useEffect } from 'react'
import { RouteComponentProps } from '@reach/router'

import ListItem from '../ListItem'

const List = (props: RouteComponentProps) => {
    const [hasError, setErrors] = useState(false)
    const [pokemon, setPokemon] = useState({
        pokemon_species: []
    })

    async function fetchData() {
        const res = await fetch('https://pokeapi.co/api/v2/generation/1')
        res.json().then(res => setPokemon(res)).catch(err => setErrors(err))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>
            {pokemon && pokemon.pokemon_species.map((species, index) => {
                return <ListItem species={species} key={index} />
            })}
            <span>Has error: {JSON.stringify(hasError)}</span>
        </div>
    )

}

export default List