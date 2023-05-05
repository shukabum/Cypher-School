import React from 'react'
import './Contact.scss'
const Contact = () => {
    
  return (
    <div className='contact-page'>
        
      <h1>
          Contact Me ....                                                        
      </h1>
      
      <div className='contact-form'>
        <form>
            <div>
                <label htmlFor='name' >
                <code>Full Name</code>
                </label>
                <input type="text" className='name' maxLength={256} name='Full-Name' placeholder="Shubham Sharma" required/>
            </div>
            <div>
                <label htmlFor='email'><code>Email Address</code></label>
                <input type='email' className='email' name='email' placeholder="email@gmail.com" maxLength={256} required />
            </div>
            <div>
                <label htmlFor="budjet"><code>Budjet</code></label>
                <select name="" id="">
                    <option value={"none"}>Select One...</option>
                    <option value={"none"}>10,000 - 12,000 Rs</option>
                    <option value={"none"}>12,000-15,000 Rs</option>
                    <option value={"none"}>Free</option>
                </select>
            </div>
            <div>
                <label htmlFor="timeline"><code>Timeline</code></label>
                <select name="" id="" placeholder='Select One...'>
                    <option value={"none"}>Select One ...</option>
                    <option value={"none"}>1 Month</option>
                    <option value={"none"}>2 Month</option>
                    <option value={"none"}>3 Month</option>
                </select>
            </div>
            <div>
                <label htmlFor='email'><code>Email Address</code></label>
                <textarea type="text" placeholder="Hello, I've got a project that i'd like to discuss further..." maxLength={5000}></textarea>
            </div>
            <div>
            </div>
            
            <input type="submit" placeholder='Submit'className='submit-btn' />
        </form>
       
      
      </div>
      
    </div>
  )
}

export default Contact
