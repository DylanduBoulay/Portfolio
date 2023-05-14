import {Col} from 'react-bootstrap';

export const ProjectCard = ({index, title, description, image}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={image} alt=""></img>
                <div className="proj-txt">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
    }


$(document).ready(function(){$(".modal-body img").click(function(){this.requestFullscreen()})});