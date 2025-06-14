import React from 'react'

const Scard = (props) => {
  return (
    <>
        <div className="card m-2 text-light" style={{backgroundColor:"#353535"}}>
                    <img src={props.img} style={{width:'50px', margin:"10px"}}  />
                    <div className="card-body">
                        <h3 className='text-danger'>{props.heading}</h3>
                        <p>{props.info}</p>
                    </div>
                </div>
    </>
  )
}

export default Scard