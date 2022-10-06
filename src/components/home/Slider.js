import React from 'react'

export default function Slider() {
    return(
        <>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="/images/home-image-1.jpg" className="d-block w-100 " alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h1>Interested in writing some blogs?</h1>
            
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/home-image-2.jpg" className="d-block w-100 " alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h1>Checkout the stories of millions</h1>
            
          </div>
        </div>
        <div className="carousel-item">
          <img src="/images/home-image-4.jpg" className="d-block w-100 " alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h1>Eye-catching Articles</h1>
            
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
        </>
    )
}

