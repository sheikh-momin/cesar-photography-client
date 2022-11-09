import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import ServiceCard from './ServiceCard';

const Serves = () => {
  useTitle('service')
  const allServices = useLoaderData()
  return (
    
    <div className=''>
      {
        allServices.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
      }
    </div>
  );
};

export default Serves;