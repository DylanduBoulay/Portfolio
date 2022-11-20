import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
// import contactImg from '../assets/images/contact.png'; for a background image on the contact form.

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    }
    
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send Message");
    const [status, setStatus] = useState({});

    const onFormUpdate = (catergory, value) => {
        setFormDetails({
            ...formDetails,
            [catergory]: value
        });
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:3000/home#contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails),
        });

        setButtonText("Send Message");
        let result = response.json();
        setFormDetails(formInitialDetails);
        if(result.code === 200){
            setStatus({success: true, message: "Message sent"});
        }
        else{
            setStatus({success: false, message: "An error occurred, message failed to send"});
        };
    };

    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col m6={6}>
                        
                    </Col>
                    <Col m6={6}>
                        <h2>Contact me</h2>
                        <form onSubmit={handleFormSubmit}>
                            <Col size={12} sm={10} className="px-1">
                                <input type="text" placeholder="First Name" name="firstName" value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)} required></input>
                            </Col>
                            <Col size={12} sm={10} className="px-1">
                            <input type="text" placeholder="Last Name" name="lastName" value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)} required></input>
                            </Col>
                            <Col size={12} sm={10} className="px-1">
                            <input type="email" placeholder="Email" name="email" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)} required></input>
                            </Col>
                            <Col size={12} sm={10} className="px-1">
                            <textarea rows="6" type="text" placeholder="Message" name="message" value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)} required></textarea>
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