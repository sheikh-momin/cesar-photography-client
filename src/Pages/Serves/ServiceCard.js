import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
  const { title, img, description }=service
  return (
    <div className="card w-4/6 bg-base-100 shadow-xl m-auto mb-20">
      <figure><img src={img} alt="" /></figure>
      <div className="card-body">
        <h1 className="card-title">
          {title}
        </h1>
      <p>{description.length > 200 ?
          <p>{description.substring(0, 200)} <Link className='text-primary'>see all...</Link></p>
        : description
          }</p>
        <div className="card-actions justify-end">
          <button className="btn btn-block mt-3">See all data</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;