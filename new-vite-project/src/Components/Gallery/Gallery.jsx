import { Container, Row } from "react-bootstrap"
import SingleImage from "../SingleImage/SingleImage"

const Gallery = ({images}) => {
    return (
        <Container>
            <Row className="gy-3">
                {images && images.map((image,index) => (
                    <SingleImage
                    imgUrl={image.src.landscape}
                    key={index}
                    />
                ))
                    
                }

            </Row>
        </Container>
    )
}

export default Gallery