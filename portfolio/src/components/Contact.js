import {useState} from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import contactImg from '../assets/images/contact.png';

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
    const [formErrors, setFormErrors] = useState({});

    const onFormUpdate = (catergory, value) => {
        setFormDetails({
            ...formDetails,
            [catergory]: value
        });
    }

    const handleFormSubmit = () => {


    }

    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col m6={6}>
                        <img src={contactImg} alt="Contact Me"></img>
                    </Col>
                    <Col m6={6}>
                        <h2>Contact me</h2>
                        <form onSubmit={handleFormSubmit}>
                            <Col sm={6} className="px-1">
                                <input type="text" placeholder="First Name" name="firstName" value={formDetails.firstName} onChange={(e) => onFormUpdate('firstName', e.target.value)}></input>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="text" placeholder="Last Name" name="lastName" value={formDetails.lastName} onChange={(e) => onFormUpdate('lastName', e.target.value)}></input>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input type="email" placeholder="Email" name="email" value={formDetails.email} onChange={(e) => onFormUpdate('email', e.target.value)}></input>
                            </Col>
                            <Col sm={6} className="px-1">
                            <input row="6" type="text" placeholder="Message" name="message" value={formDetails.message} onChange={(e) => onFormUpdate('message', e.target.value)}></input>
                                <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            <Col>
                            {
                                status.messge &&
                                <Col>
                                    <p classname={status.success ===false ? "danger" : "success"}>{status.message}</p>
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