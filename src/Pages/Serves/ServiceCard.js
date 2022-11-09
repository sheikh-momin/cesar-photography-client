import React from 'react';

const ServiceCard = ({service}) => {
  const { title, img, description }=service
  return (
    <div className="card w-4/6 bg-base-100 shadow-xl m-auto mb-10">
      <figure><img src={img} alt="" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-block">block</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;