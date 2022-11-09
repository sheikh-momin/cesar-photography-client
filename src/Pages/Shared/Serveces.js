import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Serveces = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])
  return (
    <div className='mt-20 mx-4'>
    <h2 className='text-xl font-bold mb-5 text-center'>Our Services</h2>
      {
        categories.map(category => <Link className=' ' key={categories._id} to='/serves/:id'><p className='py-3 mb-4 text-center rounded bg-primary'>{category.title }</p></Link>)
      }
    </div>
  );
};

export default Serveces;