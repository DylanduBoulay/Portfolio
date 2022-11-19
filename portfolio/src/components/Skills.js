import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Container, Row, Col} from'react-bootstrap';
import skill1 from "../assets/images/c.svg";
import skill2 from "../assets/images/unity.svg";
import skill3 from "../assets/images/git.svg";
import skill4 from "../assets/images/html.svg";
import skill5 from "../assets/images/css.svg";
import skill6 from "../assets/images/js.svg";
import skill7 from "../assets/images/php.svg";
import skill8 from "../assets/images/react.svg";
import colorSharp from "../assets/images/colorSharp.jpg";

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return (
        <section className="Skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>
                                I have used a variety of diffrent technologies throught my education and within my spare time. I am always looking to learn new skills and improve on my current skillset.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={skill1} alt="c#"></img>
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                    <img src={skill2} alt="Unity"></img>
                                    <h5>Unity</h5>
                                </div>
                                <div className="item">
                                    <img src={skill3} alt="git"></img>
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={skill4} alt="html5"></img>
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={skill5} alt="css"></img>
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={skill6} alt="js"></img>
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={skill7} alt="Webdev"></img>
                                    <h5>AJAX, PHP & SQL</h5>
                                </div>
                                <div className="item">
                                    <img src={skill8} alt="react"></img>
                                    <h5>and now... react</h5>
                                </div>

                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} alt="background"></img>
            </section>

    )
}