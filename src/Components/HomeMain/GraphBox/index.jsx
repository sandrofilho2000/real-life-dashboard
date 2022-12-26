import React from 'react'
import FirstGraph from './FirstGraph'
import { GraphBoxContainer  } from './GraphBox'
import SecondGraph from './SecondGraph'



const data = {                
    labels: ['Facebook', 'Youtube', 'Amazon'],
    dataset: [
        {
            data: [1, 5, 9]
        }
    ]
}

const GraphBox = () => {
  return (
    <GraphBoxContainer>
        <FirstGraph/>
        <SecondGraph/>
    </GraphBoxContainer>
  )
}

export default GraphBox