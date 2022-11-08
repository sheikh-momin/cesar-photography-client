import React from 'react';

const Banner = () => {
  return (
    <div>
      <h1 className='sm:text-sm md:text-3xl text-center my-4'>HEY! I’M JOHN DOE AND I SHOOT CREATIVE UNIQUE IMAGES</h1>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://img.freepik.com/free-photo/handsome-african-guy-with-stylish-haircut-taking-photo-digital-camera_171337-1345.jpg?w=1380&t=st=1667847997~exp=1667848597~hmac=9913f61ef300f72f9edf08e4ae3dba3b541ff416ce9529f913d8b1460609f054" alt='' className="w-full h-5/6" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://img.freepik.com/free-psd/photography-workshop-banner-template_23-2148668972.jpg?w=1380&t=st=1667848367~exp=1667848967~hmac=742223fc8478fff4e05918adf81e2728f39826bf1eda27687d0efb034b6e751c" alt='' className="w-full h-5/6" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://img.freepik.com/free-photo/attractive-stylish-young-woman-khaki-dress-desert-traveling-africa-safari-wearing-hat-backpack-taking-photo-vintage-camera_285396-9174.jpg?w=1380&t=st=1667848449~exp=1667849049~hmac=c05f2b29add30956be35b5801f02cb0e9eb3083f1cdef8397fd3f4e1cc1f38fe" alt='' className="w-full h-5/6" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://img.freepik.com/free-photo/close-up-african-american-young-adult-woman-having-modern-dslr-device-while-standing-blue-background-professional-photographer-with-photo-camera-getting-ready-shooting-session_482257-44688.jpg?w=1380&t=st=1667848483~exp=1667849083~hmac=9f572f73114cfc5659a683d0973fdd2e57f738625ef943fdb64a315c9e0a9fb9" alt='' className="w-full h-5/6" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;