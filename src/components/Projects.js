import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Portfolio from './PortfolioData';

export const Projects = () => {
  const [modalShow, setModalShow] = useState(false);
  const [tempData, setTempData] = useState({});
  const [isNestedModalOpen, setIsNestedModalOpen] = useState(false);
  const toggleModal = () => {
    setModalShow(!modalShow);
  };

  const toggleNestedModal = () => {
    setIsNestedModalOpen(!isNestedModalOpen);
  };

  function createModal() {
    return (
      <div className='modal-dialogue no-anime' role={document} backdropTransitionOutTiming={0} hideModalContentWhileAnimating={true}>
        <Modal
          show={modalShow}
          onHide={toggleModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          useNativeDriver={true}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter black">
              {tempData.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="CardContents">
            <h6>TLDR:</h6>
            <p>{tempData.tldr}</p>
            <h6>Full description:</h6>
            <p>{tempData.description}</p>
            <h6>Images: </h6>

            {tempData.AllMedia && tempData.AllMedia.length !== 0 ? (
                tempData.AllMedia.map((image, index) => (
                    <Image key={index} src={image} style={{ width: '200px' }} className="modal-image" onClick={() => {
                        setTempData({
                          ...tempData,
                          image: image
                        });
                        toggleModal();
                      }}/>
                ))
                ) : (
                <p>No more images available.</p>
            )}

            {testLink(tempData)}
          </Modal.Body>

          <Modal.Footer className="modal-footer">
            <div>Technologies Used: </div>
            <p style={{ fontSize: "1rem", marginRight: 'auto' }}>{tempData.technologies}</p>
            <Button onClick={toggleModal}>Close</Button>
          </Modal.Footer>
        </Modal>

<Modal
                show={isNestedModalOpen}
                onHide={toggleNestedModal}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                hideModalContentWhileAnimating={true}
                className='nested-modal thetop'
                animationType="none"
                transparent={true}
                        >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter black">
                        {tempData.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="CardContents">
                    <Image src={tempData.image} style={{width: '100%'}} className="modal-image"></Image>
                </Modal.Body>
            </Modal>

      </div>
    )
  }

  function testLink(data) {
    if (data.link !== null && data.link !== "") {
      return (
        <h6>Link:
          <a id="portfolio_model_link" href={data.link} target="_blank" rel="noreferrer">More info</a>
        </h6>
      )
    }
  }

  const mapped = Portfolio.map((item, index) => {
    return (
      <Card key={index} id="cardContainer">
        <Image
          className="cardImage"
          onClick={() => {
            setTempData({
              image: item.image,
              title: item.title,
              tldr: item.tldr,
              description: item.description,
              AllMedia: item.AllMedia,
              technologies: item.technologies,
              link: item.link
            });
            setModalShow(true);
          }}
          src={item.image}
        />
        <div className="clickInfo"> &#x1F50E;&#xFE0E;</div>
      </Card>
    );
  });

  return (
    <section className="projects" id="projects">
      <div className="projectsContainer">
        <h2>Projects</h2>
        <p>Here are some projects I have worked on.</p>
        <Container fluid="lg" style={{ padding: '2rem -25px' }}>
          <Row>{mapped}</Row>
        </Container>
      </div>
      {createModal()}
    </section>
  );
};

