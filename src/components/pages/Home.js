import React from 'react';

export default function Home() {
  return (
    <div class="p-5 mb-4 bg-light">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">Caitlin Spittler</h1>
        <img className="img-fluid" src={`${process.env.PUBLIC_URL}/assets/images/lashes cat picture.jpg`} alt="cat"/>
      </div>
    </div>
  );
}
