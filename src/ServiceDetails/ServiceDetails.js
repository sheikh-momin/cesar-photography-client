import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const ServiceDetails = () => {
  const { title, description, img, ratings , price, views, _id} = useLoaderData()
  const {user} = useContext(AuthContext)

const handleComment = event => {
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const message = form.message.value;


  const review = {
    message,
    email

  }
  fetch('http://localhost:5000/reviews', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(review)
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.acknowledged) {
        alert('Review posted');
        form.reset();
      }
    })
    .catch(er => console.error(er));

}

  return (
    <div className='mt-10 grid md:grid-cols-2 grid-cols-1' >
      <div className="card w-4/6 bg-base-100 shadow-xl m-auto mb-5 ">
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

      {
        user?.uid ? 
          <form onSubmit={handleComment} className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Add your Comment!</h1>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="email" defaultValue={user?.email} className="input input-bordered" readOnly required />
                  </div>
                  <div className="form-control">
                    <textarea placeholder='Your Message' name="message" id="" cols="30" rows="10"></textarea>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
          :
          <Link to='/login'>Please log in for review!</Link>
      }

    </div>
  );
};

export default ServiceDetails;