import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Result = () => {
    return(
      <p>Thank you for your message! I will contact you soon.</p>
    );
  };

  function ContactSection() {
    const form = useState();
    const [result, showResult] = useState(false);
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_mp95mmb', 'template_lkf72o6', e.target, 'W4hMrFL5c8e7cdZxY')
        .then(
          (result) => {
            console.log(result.text);
        }, 
        (error) => {
            console.log(error.text);
        }
        );
        e.target.reset();
        showResult(true);
    };
   
    setTimeout(() => {
      result(false);
    }, 10000);

    return ( 
        <div className="contact-container" >
            <h1>Contact me</h1>
            <p style={{ textAlign: "center" }}>If you have any questions regarding commissions, please feel free to get in touch.</p>
            <form ref={form} action="" onSubmit={sendEmail}>
                <div className="contact-form">
                    <input className="input" type="text" id="name" name="name" placeholder="Your name" />
                    <input className="input" type="text" id="email" name="email" placeholder="Your email" />
                </div>
                <input className="input" type="text" id="message" name="message" placeholder="Your message" style={{width: "89%"}} />
                <div>
                <button type="submit"> Send </button>
                </div>
                <div className='sent'>{result ? <Result /> : null}</div>
            </form>
        </div>
     );
  };
 
export default ContactSection;