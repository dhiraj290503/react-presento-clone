import React from 'react'

const TestiCard = (props) => {
  return (
    <>
         <div className="card shadow-sm border-0 p-4 text-center" style={{ maxWidth: '400px', margin: 'auto' }}>
      <img
        src={props.img}
        className="rounded-circle mx-auto mb-3"
        alt="Jena Karlis"
        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
      />
      <h5 className="mb-0 fw-bold">{props.name}</h5>
      <small className="text-muted">{props.role}</small>

      <div className="my-2">
        {/* Star ratings */}
        {[...Array(5)].map((_, index) => (
          <i key={index} className="bi bi-star-fill text-warning me-1"></i>
        ))}
      </div>

      <p className="fst-italic text-muted mt-3" style={{ fontSize: '15px' }}>
        <span className="text-danger fs-4">“</span>
        &nbsp;Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor
        labore quem eram duis noster aute amet eram fore quis sint minim.&nbsp;
        <span className="text-danger fs-4">”</span>
      </p>
    </div>
    </>
  )
}

export default TestiCard