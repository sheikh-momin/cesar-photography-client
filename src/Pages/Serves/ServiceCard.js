import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({service}) => {
  const { title, img, description, _id }=service
  return (
    <div className="card w-4/6 bg-base-100 shadow-xl m-auto mb-20">
    
      <figure>
        <PhotoProvider
          speed={() => 800}
          easing={(type) =>
            type === 2
              ? "cubic-bezier(0.36, 0, 0.66, -0.56)"
              : "cubic-bezier(0.34, 1.56, 0.64, 1)"
          }
        >
          <PhotoView src={img}>
            <img
              style={{ objectFit: "cover" }}
              className=" w-full"
              src={img}
              alt="services"
            />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body">
        <h1 className="card-title text-lime-600 text-2xl">
          {title}
        </h1>
      <p>{description.length > 100 ?
          <p>{description.substring(0, 100)} <Link className='text-primary'>see all...</Link></p>
        : description
          }</p>
        <div className="card-actions justify-center">
          <Link to={`/serves/${_id}`}><button className="btn btn-block mt-3">See all data</button></Link>
          
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;