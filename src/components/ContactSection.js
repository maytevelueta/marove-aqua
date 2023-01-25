const ContactSection = () => {
    return ( 
        <div className="contact-container" >
            <h1>Contact me</h1>
            <p style={{ textAlign: "center" }}>If you have any doubts, I'll be pleased to help you.</p>
            <form>
                <div className="contact-form">
                    <input className="input" type="text" id="name" name="name" placeholder="Your name" />
                    <input className="input" type="text" id="email" name="email" placeholder="Your email" />
                </div>
                <input className="input" type="text" id="message" name="message" placeholder="Your message" style={{width: "100%"}} />
                <div>
                <button type="submit"> Send </button>
                </div>
            </form>
        </div>
     );
}
 
export default ContactSection;