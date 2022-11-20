import {Container, Row, Col, Tab, Nav} from'react-bootstrap';
import {ProjectCard} from './ProjectCard';
import bgimg_projects from '../assets/images/bgimg_projects.jpg';
import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';

export const Projects = () => {
    
    const projects = [
    {
        title: "Swag",
        description: "The big swag",
        image: img1,
    },
    {
        title: "Swag 2",
        description: "very swag yes",
        image: img2,
    },
];



    return(
        <section className="projects" id="projects">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                    <p>Here are some projects I have worked on.</p>
                    <Tab.Container id="project-tabs" defaultActiveKey="first">
                    <Nav variant="pills" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                        </Nav.Item>    
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                            {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                            key={index}

                                        ></ProjectCard>
                                    )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">TEST 2
                            <Row>
                                {
                                projects.map((project, index) => {
                                    return (
                                        <ProjectCard
                                            key={index}

                                        ></ProjectCard>
                                    )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">TEST 3
                            <Row>
                                {
                                projects.map((project, index) => {
                                    return (
                                        <p>{projects.title}</p>
                                    )
                                    })
                                }
                            </Row>
                        </Tab.Pane>

                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
                                <img className='background-image-right' src={bgimg_projects} alt=""></img>
        </section>

    )
}