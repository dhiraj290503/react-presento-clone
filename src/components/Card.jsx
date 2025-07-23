import React from 'react'

const Card = (props) => {
  return (
    <>
            <div className="card m-2 bg-dark text-light border-0 mt-5">
                    <img src={props.img} style={{width:'50px', margin:"10px"}} />
                    <div className="card-body">
                        <h3 className='text-danger'>{props.heading}</h3>
                        <p>{props.info}</p>
                    </div>
                </div>
    </>
  )
}

export default Card