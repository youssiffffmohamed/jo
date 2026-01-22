import React from 'react'
import avatar from '../../assets/avataaars.svg'

export default function Home() {
  return (<>
   
    <section
      className="d-flex flex-column justify-content-center align-items-center text-white py-5 "
      style={{
        backgroundColor: "#1abc9c",
        minHeight: "90vh",
      }}
    >
      {/* IMAGE */}
      <img
        src={avatar}
        alt="Profile"
        className="rounded-circle mb-4"
        style={{ width: "180px" }}
      />

      {/* TITLE */}
      <h2 className="fw-bold fs-1 text-uppercase mb-3">
        Start Framework</h2>
     
      {/* STAR LINE */}
      <div className="d-flex align-items-center gap-3 mb-3">
        <div style={{ width: "80px", height: "4px", background: "white" }}></div>
        <i class="fa-solid fa-star fs-4"></i>
        <div style={{ width: "80px", height: "4px", background: "white" }}></div>
      </div>

      {/* SUBTEXT */}
      <p className="fs-5">
        Graphic Artist – Web Designer – Illustrator
      </p>
    </section>
  
  </>
   
  )
}
