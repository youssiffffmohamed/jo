import React, { useState } from 'react';
import img1 from '../../assets/port1.png';
import img2 from '../../assets/port2.png';
import img3 from '../../assets/port3.png';
import "./Portfilo.css";

const images = [
  { id: 1, src: img1, alt: "Image 1" },
  { id: 2, src: img1, alt: "Image 2" },
  { id: 3, src: img2, alt: "Image 3" },
  { id: 4, src: img2, alt: "Image 4" },
  { id: 5, src: img3, alt: "Image 5" },
  { id: 6, src: img3, alt: "Image 6" },
];

export default function Portfilo() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setSelectedImage(null);

  return (<>
  <section
        className=" container py-5 "
        style={{
        
          minHeight: "90vh",
        }}
      >
         <div >
     <div className="text-center my-4">
        <h2 className="text-uppercase fw-bold fs-1">portfolio component</h2>

        {/* STAR LINE */}
        <div className="d-flex justify-content-center align-items-center gap-3 mt-3">
          <div style={{ width: "80px", height: "4px", background: "#2c3e50" }}></div>
         <i class="fa-solid fa-star fs-4"></i>
          <div style={{ width: "80px", height: "4px", background: "#2c3e50" }}></div>
        </div>
      </div>


      <div className="row g-3">
        {images.map((img) => (
          <div key={img.id} className="col-md-4">
            <div
              className="portfolio-item position-relative"
              onClick={() => setSelectedImage(img.src)}
            >
              <img src={img.src} alt={img.alt} className="img-fluid rounded" />
              <div className="overlay d-flex justify-content-center align-items-center">
                <span className="plus">+</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="portfolio-modal" onClick={handleClose}>
          <img
            src={selectedImage}
            alt="Selected"
            className="modal-img rounded"
          />
        </div>
      )}
    </div>
      </section>
  </>
   
  );
}
