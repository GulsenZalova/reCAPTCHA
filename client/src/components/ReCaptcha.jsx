import React, { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

function ReCaptcha() {
    const [verified, setVerified] = useState(false)
    function onChange(value) {
        console.log("Captcha value:", value);
    }
    return (

        <div className='container'>
            <div className='formContainer'>
                <h1>Login Form</h1>
                <form action="/login" method='POST' className='form'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input className='area' type="text" id='name' />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' />
                    </div>
                    <div>
                        <label htmlFor="password">Email</label>
                        <input type="text" id='password' />
                    </div>
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                    />
                    <button className='submitBtn' type='submit' disabled={!verified}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ReCaptcha
