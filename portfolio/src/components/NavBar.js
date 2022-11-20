import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect} from "react";
import logo from '../assets/images/logo.svg';
import navIcon1 from '../assets/images/nav-Icon1.svg';
import navIcon2 from '../assets/images/nav-Icon2.svg';
import navIcon3 from '../assets/images/nav-Icon3.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
            {/* <img src={logo}></img> */}Dylnanz
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link> 
          </Nav>

        <span className="navbar-text">
            <div className="social-icon">
                <a href="https://au.linkedin.com/in/dylan-du-boulay-193828196"><img src={navIcon1} alt=""/></a>
                <a href="https://github.com/DylanduBoulay"><img src={navIcon2} alt=""/></a>
                <a href="#"><img src={navIcon3} alt=""/></a>

            </div>
            <button className="btn" ><span>Let's Connect</span> </button>
        </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}