import React from 'react';

export default function Blog() {
  return (
    <div class="p-5 mb-4 bg-light">
    <div class="container-fluid py-5">
      <h1 class="display-5 fw-bold">Portfolio</h1>
      <p class="col-md-8 fs-4">Here is a sample of some of my work! Click on the images to view my collaborations!</p>
    </div>
    <div class="container-fluid py-5">
    <a href="https://gnimelf.github.io/project-1/"><img id="portfolio-logo" className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/beer.jpg`} 
     alt="beer"/></a>
    <a href="https://project2-mw.herokuapp.com/"><img id="portfolio-logo" className="img-fluid" 
     src={`${process.env.PUBLIC_URL}/assets/images/laughing emoji.jpg`} 
     alt="logo"/></a>
    </div>
  </div>
  );
}
