import React from 'react'

export default function Contact() {
  return (<>
  
   <section className="container py-5">

      {/* TITLE */}
      <div className="text-center my-4">
        <h2 className="text-uppercase fw-bold fs-1">Contact Section</h2>

        {/* STAR LINE */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
          <div style={{ width: "80px", height: "4px", background: "#2c3e50" }}></div>
         <i class="fa-solid fa-star fs-4"></i>
          <div style={{ width: "80px", height: "4px", background: "#2c3e50" }}></div>
        </div>
      </div>

      {/* FORM */}
      <form className="w-75 mx-auto mt-5">

        {/* USERNAME */}
        <label className="text-muted">userName</label>
        <input type="text" className="form-control py-2 mb-4" />

        {/* AGE */}
        <label className="text-muted">userAge</label>
        <input type="number" className="form-control py-2 mb-4" />

        {/* EMAIL */}
        <label className="text-muted">userEmail</label>
        <input type="email" className="form-control py-2 mb-4" />

        {/* PASSWORD */}
        <label className="text-muted">userPassword</label>
        <input type="password" className="form-control py-2 mb-4" />

        {/* BUTTON */}
        <button
          type="submit"
          className="btn btn-info text-white mt-2"
          
        >
          send Message
        </button>

      </form>

    </section>
  </>
  )
}
