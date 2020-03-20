import React from 'react'
import { RouteComponentProps } from '@reach/router'

interface DetailsProps extends RouteComponentProps {
    species?: string
}

const Details = ({ species }: DetailsProps) => {
    return (
        <div>
            {species}
        </div>
    )
}

export default Details