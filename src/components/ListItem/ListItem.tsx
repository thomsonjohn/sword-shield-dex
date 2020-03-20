import React from 'react'
import { Link } from '@reach/router'

const ListItem = ({ species }: any) => {
    return (
        <Link to={`${species.name}`}>{species.name}</Link>
    )
}

export default ListItem