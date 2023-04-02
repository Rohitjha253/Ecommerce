import React from 'react'

const Prod = ({prod,size}) => {
  return (
    <>
    <div className='myproduct'>
        <div className="card prodcard" style={{width: size}}>
  <img src={prod.imagePath} className="card-img-top myimg" alt="Not loading" />
  <div className="card-body">
    <h5 className="card-title">{prod.name}</h5>
    <p className="card-text">{prod.description}</p>
    <a href="" className="btn btn-primary">Go to Details</a>
  </div>
 </div>
    </div>
    </>
  )
}

export default Prod