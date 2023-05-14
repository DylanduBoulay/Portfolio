import Container from'react-bootstrap/Container';
import React from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// import img1 from '../assets/images/img1.jpg';
// import img2 from '../assets/images/img2.jpg';
import Portfolio from './PortfolioData'
import { ModalBody } from 'react-bootstrap';

import { useState } from 'react';


export const Projects = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [tempData, setTempData] = React.useState({});
    const [isFullscreen, setIsFullscreen] = useState(false);
    const toggleFullscreen = () => {
          setIsFullscreen(!isFullscreen);
    };

    function createModal(data) {
        return(
            <div className='modal-dialogue' role={document}>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                


                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter black">
                        {data.title}
                    </Modal.Title>
                </Modal.Header>
                    <ModalBody className="CardContents">
                        <h6>TLDR:</h6>
                        <p> {data.tldr} </p>
                        <h6>Full description:</h6>
                        <p>{data.description} </p>
                        <h6>Images: </h6>
                        //when the image is clicked, it will go fullscreen
                        <div className="modal-image" onClick={toggleFullscreen}>
                            <Image src={data.image} style={{width: '200px'}}></Image>
                        </div>
                        
                        
                        {testLink(data)}
                    </ModalBody>
                    

                    <Modal.Footer className="modal-footer">
                        <div>Technologies Used: </div>
                        <p style={{ fontSize: "1rem" , marginRight: 'auto'}}>{data.technologies}</p>
                        <Button onClick={() => setModalShow(false)}>Close</Button>
                    </Modal.Footer>
            </Modal>
            </div>
        )
    }


    function testLink(data){
        if(data.link !== null && data.link !== ""){
            return(
                <h6>Link:
                <a id="portfolio_model_link" href={data.link} target="_blank" rel="noreferrer">More info</a>
                </h6>
            )
        }
    }


    const mapped = Portfolio.map((item, index) => {
        return (
            <Card key={index} id="cardContainer">
                <Image className="cardImage" onClick={() => {
                    setTempData({
                    image: item.image,
                    title: item.title,
                    tldr: item.tldr,
                    description: item.description,
                    AllMedia: item.AllMedia,
                    technologies: item.technologies,
                    link: item.link
                })
                setModalShow(true)
            }}
            src={item.image}></Image>
            <div className="clickInfo"> &#x1F50E;&#xFE0E;</div>
            {createModal(tempData)}
            </Card>
        )
    })

    return(
        <section className="projects" id="projects">
            <div className="projectsContainer" >
            <h2>Projects</h2>
            <p>Here are some projects I have worked on.</p>
            <Container fluid="lg" style={{padding: '2rem -25px'}}>
                <Row>
                    {mapped}
                </Row>
            </Container>
            </div>
        </section>

    )
}
