import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import useTitle from '../../Hooks/useTitle';

const SignIn = () => {
  useTitle('signIn')
  const [error, setError] = useState('')
  const { googleSignIn, githubSignIn, createUser } = useContext(AuthContext)


  const googleProvider = new GoogleAuthProvider()
  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
      })
      .catch(error => console.error(error))
  }

  const githubProvider = new GithubAuthProvider()
  const handleGithubSignIN = () => {
    githubSignIn(githubProvider)
      .then(result => {
        const user = result.user
        console.log(user)
      })
      .catch(error => console.error(error))
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;


    createUser(email,password)
      .then(result => {
        const user = result.user
        console.log(user)
        setError('')
        form.reset()
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
          <h1 className="text-5xl font-bold">Sign In now!</h1>

        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input name='name' type="text" placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input name='photoURL' type="text" placeholder="email" className="input input-bordered" />
            </div>
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
              <button className="btn btn-primary">Sign In</button>
              <Link className='my-3' to='/signin'>If you already have an account then Log In!</Link>
            </div>
            <div>
              <button onClick={handleGithubSignIN} className="btn btn-outline mr-4"><FaGithub className='mr-3 '></FaGithub>GitHub</button>
              <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success"><FaGoogle className='mr-3 '></FaGoogle>Google</button>
            </div>
            <div><p>{error}</p></div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignIn;