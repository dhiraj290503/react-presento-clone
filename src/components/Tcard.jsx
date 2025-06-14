import React from 'react'

const Tcard = (props) => {
  return (
    <>
        
                    <div className="card rounded-3 mt-4" style={{backgroundColor:"#353535"}}>
                      <div className="" >
                        <img src={props.img} alt="" className='rounded' style={{width:"100%"}}/>
                          <h4 className='text-light text-left mx-4 mt-2 fw-bold'>{props.name}</h4>
                          <p className='text-light text-left mx-4 '>{props.role}</p>
                      </div>
                    </div>
              
    </>
  )
}

export default Tcard