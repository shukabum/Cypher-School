import React from 'react'
import icon from '../assets/fav3.png'
import './Login.scss'
const Login = () => {
  return (
        <>
        <div className='container-login'>
            <div className='logo-signin'>
                <img src={icon} height={50}/>
                <h2 className=''>
                    Sign in to your account
                </h2>
            </div>
            <div className='inputs'>
                <form action="#" method="POST">
                    <div className='emails'> 
                        <label htmlFor="email" >
                            Email address
                        </label>
                        <div className="email-in">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className=""
                                />
                        </div>
                    </div>

                    
                        <div className="passwords">
                            <label htmlFor="password" className="">
                                Password
                            </label>
                            <a href="#" className="">
                                    Forgot password?
                            </a>
                           
                        
                        
                        </div>
                        <div className='password-in'>
                                <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className=""
                                />
                        </div>
                        <div className='btn-signin'>
                            <button
                                type="submit"
                                className=""
                            >
                                Sign in
                            </button>
                        </div>
                                
                </form> 

            </div>

        </div>
        </>
    )
}

export default Login
