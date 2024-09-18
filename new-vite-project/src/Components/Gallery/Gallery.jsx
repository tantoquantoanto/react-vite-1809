import { Container, Row } from "react-bootstrap"
import SingleImage from "../SingleImage/SingleImage"

const Gallery = ({images}) => {
    return (
        <Container>
            <Row className="gap-1">
                {images && images.map(image => (
                    <SingleImage
                    imgUrl={image.src.landscape}
                    />
                ))
                    
                }

            </Row>
        </Container>
    )
}

export default Gallery