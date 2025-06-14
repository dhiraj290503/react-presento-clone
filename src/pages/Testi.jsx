import React from 'react'
import TestiCard from '../components/TestiCard'

const Testi = () => {

    const prod =[
        {
            id:1,
            img:'../src/assets/images/testimonials-5.jpg',
                   name:'John Larson',
                    role:'Entrepreneur'
        },
        {
            id:2,
             img:'../src/assets/images/testimonials-4.jpg',
                   name:'Matt Brandon',
                    role:'Freelancer'
        },
        {
            id:3,
             img:'../src/assets/images/testimonials-2.jpg',
                   name:'Sara wilsson',
                    role:'Designer'
        }
    ]

  return (
    <>
        <div className="Ccontainer-fluid">
            <div className="row">
                <div className="col-md-12 mt-5">
            <h1 className="text-center mt-5">TESTIMONIAL</h1>
            <h1 className="text-danger text-center ">____</h1>
            <p className="text-center mt-4 fw-bold text-secondary">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

                <div className="row" >
                   {
                    prod.map((val,index,array)=>{
                        return (
                              <div className="col-md-4" key={val.id}>  
                    <TestiCard
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







        
          

    </>
  )
}

export default Testi