import React from 'react'

export default function About() {
  return (<>

  <section
        className="d-flex flex-column justify-content-center align-items-center text-white py-5 "
        style={{
          backgroundColor: "#1abc9c",
          minHeight: "90vh",
        }}
      >
       
  
        {/* TITLE */}
        <h2 className="fw-bold fs-1 text-uppercase mb-3">
         about component</h2>
       
        {/* STAR LINE */}
        <div className="d-flex align-items-center gap-3 mb-3">
          <div style={{ width: "80px", height: "4px", background: "white" }}></div>
          <i class="fa-solid fa-star fs-4"></i>
          <div style={{ width: "80px", height: "4px", background: "white" }}></div>
        </div>


      <div className='d-flex container mx-auto '>
        <p className="fs-5" >
      Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization..
        </p>
        <p className="fs-5">
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>  
      </div>
  
       
      </section>
  </>
  )
}
