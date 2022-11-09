import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
  const { title, description, img, ratings , price, views} = useLoaderData()
  return (
    <div className='my-5'>
      <div className="card w-4/6 bg-base-100 shadow-xl m-auto mb-20">
        <figure><img src={img} alt="" /></figure>
        <div className="card-body">
          <h1 className="card-title text-lime-600 text-2xl">
            {title}
          </h1>
          <p>{description
          }</p>
          <div className="card-actions justify-between text-center mt-5">
            <p>Ratings: <span className='text-amber-500'>{ratings}</span></p>
            <p>Views: <span className='text-amber-500'>{views}</span></p>
            <p>Price: <span className='text-amber-500'>{price}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;