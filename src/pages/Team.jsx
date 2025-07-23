import React from 'react'
import Tcard from '../components/Tcard'

const Team = () => {

  const prod=[
    {
      id:1,
      img:"/public/assets/images/team-1.jpg",
      name:'Walter White' ,
      role:'Chief Executive Officer'
    },
    {
      id:2,
       img:"/public/assets/images/team-2.jpg",
      name:'Sarah Jhonson' ,
      role:'Product Manager'
    },
    {
      id:3,
       img:"/public/assets/images/team-3.jpg",
      name:'William Anderson' ,
      role:'CTO'
    },
    {
      id:4,
       img:"/public/assets/images/team-4.jpg",
      name:'Amanda Jepson' ,
      role:'Accountant'
    }
  ]

  return (
    <>
       <div className="container-fluid bg-dark">
        <div className="row">
          <div className="col-md-12 mt-5">
            <h1 className="text-center mt-5 text-light">TEAM</h1>
            <h1 className="text-danger text-center ">____</h1>
            <p className="text-center mt-4 fw-bold text-light">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

           <div className="container p-5">
             <div className="row">
                {
                  prod.map((val,index,array)=>{
                    return (
                      <div className="col-md-3" key={val.id}>
                      <Tcard
                        img={val.img}
                        name={val.name}
                        role={val.role}
              />
              </div>
                    )
                  })
                }
            </div>
           </div>

           </div>
           </div>
    </>
  )
}

export default Team