import React, { useContext, useState } from 'react';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';


const LogIn = () => {
  useTitle('login')
  const [error, setError] = useState('')
  const { signIn } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const handleSubmit= event =>{
    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value
    signIn(email, password)
      .then(result => {
        const user = result.user
        console.log(user)
        form.reset()

        const currentUser= {
          email: user.email
        }
        console.log(currentUser)
        // jwt token
        fetch('https://cesar-photography-server.vercel.app/jwt', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(currentUser)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          localStorage.setItem('token', data.token)
          navigate(from, { replace: true })
        })
        setError('')
      })
      .catch(error => {
        console.error(error)
        setError(error.message)
      })


  }
  return (
    <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input name='email' type="text" placeholder="email" className="input input-bordered" required/>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input name='password' type="password" placeholder="password" className="input input-bordered" required/>
              
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <Link className='my-3' to='/login'>If you don't have an account then Sign In first!</Link>
            </div>
            <div><p>{error}</p></div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LogIn;