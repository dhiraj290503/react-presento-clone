import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container-fluid bg-dark mt-5">
    <div className="container">
        <div className="row">
        <div className="col-md-12 ">
          <div className="row mt-5 bg-dark text-light">
            <div className="col-md-3 fs-1" style={{paddingTop:"20px"}}>PRESENTO</div>
            <div className="col-md-3 mt-5 "><p className='fw-bold'>Useful Links</p>
            <p>Home</p>
            <p>About us</p>
            <p>Services</p>
            <p>Terms or service</p>
            <p>Privacy policy</p>
            </div>
            <div className="col-md-3 mt-5 "><p className='fw-bold'>Our Services</p>
            <p>Web Design</p>
            <p>Web Development</p>
            <p>Product Management</p>
            <p>Marketing</p>
            <p>Graphic Design</p>
            </div>
            <div className="col-md-3 mt-5 "><p className='fw-bold'>Our Newsletter</p>
            <p>Subscribe to our newsletter and receive the latest news about our products and services!</p>
                 <form className="d-flex" role="search">
        <input className="form-control bg-dark text-light" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-danger" type="submit">Search</button>
      </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

    </>
  )
}

export default Footer