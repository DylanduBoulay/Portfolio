import {useRef, useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import emailjs from '@emailjs/browser';
// import contactImg from '../assets/images/contact.png'; for a background image on the contact form.

export const Contact = () => {
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        emailjs.sendForm('service_kryf23o', 'template_qw8biri', form.current, '3J5Jrm_qWQiM7FA-t').then((result) => {
            console.log(result.text);
            console.log('Email sent successfully!');
            setStatus({success: true, message: "Message sent"});
            e.target.reset();
        }, (error) => {
          console.log(error.text);
          console.log('Email failed to send, an error occurred!');
          setStatus({success: false, message: "An error occurred, message failed to send"});
      }    
      );
      setButtonText("Send Message");
  };


    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col m6={6}>
                        
                    </Col>
                    <Col m6={6}>
                        <h2>Contact me</h2>
                        <form ref={form} onSubmit={sendEmail}>
                            <Col size={12} sm={10} className="px-1">
                                <input type="text" placeholder="name" name="user_name" required></input>
                            </Col>
                            <Col size={12} sm={10} className="px-1">
                            <input type="email" placeholder="Email" name="user_email" required></input>
                            </Col>
                            <Col size={12} sm={10} className="px-1">
                            <textarea rows="6" type="text" placeholder="Message" name="user_message" required></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            <Col>
                            {
                                 status.message &&
                                 <Col>
                                   <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                 </Col>
                            }
                            </Col>
                        </form>
                    </Col>

                </Row>
            </Container>

        </section>
    )

}