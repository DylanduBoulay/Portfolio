import {Col} from 'react-bootstrap';

export const ProjectCard = ({index, title, description, image}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={image} alt="" style={"max-width: 660px; max height: 371.25px;" }></img>
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
    }
