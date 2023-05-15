import {useState, useEffect} from 'react';
import {Container, Row, Col} from'react-bootstrap';
// import {ArrowRightCircle} from "react-bootstrap-icons";
// import headerImg from "../assets/images/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Software Developer", "Programmer","Web Developer", "Sound Designer", "Nerd"];
    const [text,setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
            
        }, [delta]);

        return () => {
            clearInterval(ticker);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);
    
        setText(updatedText);

        if(isDeleting)  {
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }

    }


    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>Hi, I'm Dylan, </h1>
                        <h1><span className="wrap">{text}</span></h1>
                        <p>I am from Perth, Australia and have completed my studies at Murdoch University. I graduated with a Bachelors of Creative Media, majoring in Games Software Design and Production and Sound. As such, I have been able to dabble in a mix of IT related projects, mainly programming and software design, as well as creative projects, such as sound design.</p> 
                        <p>I spend my free time learning things I think are useful to me. If I am not stuck into something IT related, I will find myself buried in audio programs like Ableton. While I don't play any contemporary instruments I get a kick out of messing around with digital synthesizers and effects. I am eager to learn more and build on my skillset to expand and explore new opportunities.</p>
                        {/* (set to finish my studies Nov 2022 and get my results by 12th Dec 2022) */}
                        {/* <button className="connectBtnSm"onClick={() => console.log('connect')}>
                            Let's Connect <ArrowRightCircle size={25}></ArrowRightCircle></button> */}
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={headerImg} alt="headerimg"></img>  INSERT PICURE HERE BRUH.mp3 */}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

