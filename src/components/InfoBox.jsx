import React from 'react'
import gem from '/public/assets/images/gem.png'
const InfoBox = (props) => {
  return (
    <>
        <div className="card text-center p-4 rounded-3 shadow text-secondary">
                  <img src={props.img} alt="" style={{width:"40px",marginLeft:"42%"}} className='mb-1'  />
                  <h1>{props.count}</h1>
                  <h6>{props.title}</h6>
                </div>
    </>
  )
}

export default InfoBox