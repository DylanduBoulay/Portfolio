import Container from'react-bootstrap/Container';
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// import img1 from '../assets/images/img1.jpg';
// import img2 from '../assets/images/img2.jpg';
import Portfolio from './PortfolioData'
import { ModalBody } from 'react-bootstrap';

export const Projects = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [tempData, setTempData] = React.useState({});

    function createModal(data) {
        return(
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >

                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {data.title}
                    </Modal.Title>
                </Modal.Header>
                    <ModalBody>
                        <p>tldr: {data.tldr} </p>
                        <p>Full description: {data.description} </p>
                        <p> {data.AllMedia} </p>
                        <p>technologies: {data.technologies} </p>
                        
                    </ModalBody>
                
            </Modal>
        )
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
            <h2>Projects</h2>
            <p>Here are some projects I have worked on.</p>
            <Container fluid="lg" style={{padding: '2rem 0'}}>
                <Row>
                    {mapped}
                </Row>
            </Container>
        </section>

    )
}