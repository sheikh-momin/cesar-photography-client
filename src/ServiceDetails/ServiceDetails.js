import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import useTitle from '../Hooks/useTitle';

const ServiceDetails = () => {
  useTitle('ServiceDetails');
  const { title, description, img, ratings, price, views, _id, } = useLoaderData()
  const {user} = useContext(AuthContext)

  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`https://cesar-photography-server.vercel.app/reviews/${_id}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [reviews])





const handleComment = event => {
  

  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const id = form.id.value;
  const title = form.title.value;
  const message = form.message.value;


  const review = {
    message,
    email,
    id,
    title

  }
  fetch('https://cesar-photography-server.vercel.app/reviews', {
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
    <div>
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
                        <span className="label-text">Service Id</span>
                      </label>
                      <input type="password" name='id' placeholder="server id" defaultValue={_id} className="input input-bordered" readOnly required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Title</span>
                      </label>
                      <input type="text" name='title' placeholder="title" defaultValue={title} className="input input-bordered" readOnly required />
                    </div>
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
            <Link className='text-center font-bold text-3xl text-red-700 flex items-center justify-center' to='/login'>Please log in for review!</Link>
        }

      </div>

      <div className='text-center mt-5 bg-slate-600'>
        <h1 className='text-2xl mb-5 text-lime-600 font-bold'>All Reviews fo {title}</h1>
        {
          reviews.map(review=>
            <div className='m-auto mb-5 bg-stone-600 shadow-xl w-auto md:w-1/2 rounded-xl'>
              <h4 className='text-xl mb-3'>{review.email}</h4>
              <p className='text-lg'>{review.message}</p>
          </div>)
        }
      </div>
    </div>
  );
};

export default ServiceDetails;