import React from 'react'
import Prod from './Prod'

const ProductctPage = ({product,size}) => {
  return(
    <>
  <div className='myprod'>
    {
        product.map((prod) =>(
          <Prod key={prod.id} prod={prod} size={size}/>      
        )
        )
    }
    </div>
    </>
  )
}
 
export default ProductctPage