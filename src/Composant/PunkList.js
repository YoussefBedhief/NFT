import React from 'react'
import CollectionCard from './CollectionCard'
import './PunkList.css'

function PunkList( {punkListData, setSelectedPunk}) {
  var reversePunkListData = [ ...punkListData].reverse();
  console.log(reversePunkListData)
  return (
    <div className='PunkList'>
        {
        reversePunkListData.map( punk =>(
          <div onClick={() => setSelectedPunk(punk.token_id)}>
            
            <CollectionCard 
            className='CollectionCard'
             key={punk.id}
             id={punk.token_id}
             name={punk.name}
             traits={punk.traits}
             image={punk.image_url}
            />
          </div>

        ))

        }

    </div>
  )
}

export default PunkList