import React, { useEffect, useState } from 'react';
import UserService from './UserService';


const UserAddedService = () => {

  const [services, setServices] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5000/services')
    .then(res=> res.json())
      .then(data => setServices(data))
  },[])

  return (
    <div>
      {services.slice(6, 30).map(service => <UserService key={service._id} service={service}></UserService>)}
    </div>
  );
};

export default UserAddedService;