import React from 'react'
import Ccard from '../components/Ccard'

const Contact = () => {
  
  return (
    <>
      <div className="container-fluid">
        <div className="row ">
          <div className="col-md-12 mt-5">
            <h1 className="text-center mt-5">CONTACT</h1>
            <h1 className="text-danger text-center ">____</h1>
            <p className="text-center mt-4">
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>

            <div className="row m-auto">
              <div className="col-md-6">
                <div className="row ">
                  <div className="col-md-12 ">
                    <div className="card text-center border-0 shadow mt-4">
                      <i className="bi bi-geo-alt text-danger fs-1"></i>
                    <h4 className='fw-bold text-secondary'>Address</h4>
                    <p>A108 Adam Street, New York, NY 535022</p>
                    </div> 
                  </div>
                  <div className="row ">
                    <div className="col-md-6 p-4">
                      <div className="card text-center border-0 shadow mt-4">
                      <i className="bi bi-telephone text-danger fs-1"></i>
                    <h4 className='fw-bold text-secondary'>Call us</h4>
                    <p>+1 5589 55488 55</p>
                    </div>
                    </div>
                    <div className="col-md-6 p-4">
                       <div className="card text-center border-0 shadow mt-4">
                      <i className="bi bi-envelope text-danger fs-1"></i>
                    <h4 className='fw-bold text-secondary'>Email Us</h4>
                    <p>info@example.com</p>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-4">

                 <form className="bg-white shadow p-4 rounded">

        <div className="row mb-3">
          <div className="col-md-6 mb-3 mb-md-0">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Your Email"
              required
            />
          </div>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Subject"
            required
          />
        </div>

        <div className="mb-4">
          <textarea
            className="form-control"
            rows="5"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-danger rounded-pill px-4 py-2"
          >
            Send Message
          </button>
           </div>
        
      </form>
                  
              </div>
            </div>

          </div>
          </div>
    </>
  )
}

export default Contact