import React from 'react'

export default function Footer() {
  return ( <>

    <footer className="bg-dark text-white py-3 mt-5 ">
      <div className="container">
        <div className="row text-center text-md-start">

          {/* Column 1 */}
          <div className="col-md-4 mb-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243.</p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-4 text-center">
            <h4 className="mb-3">AROUND THE WEB</h4>

            <div className="d-flex justify-content-center gap-3 fs-4">

              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-linkedin-in"></i>

            </div>
          </div>

          {/* Column 3 */}
          <div className=" text-center col-md-4 mb-4 text-md-end text-center">
            <p>ABOUT FREELANCER</p>
            <p>Freelance is a free to use, licensed Bootstrap </p>
          </div>

        </div>
      </div>
    </footer>
    </>
  )
}
