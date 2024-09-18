import "./hero.css"
import { Button, Col, Container, Row } from "react-bootstrap"
import HeroInput from "./HeroInput/HeroInput"


const GalleryHero = () => {

    return (
      <Container>
        <Row>
            <Col className="py-2">
            <div className="d-flex gap-2 align-items-center justify-content-center"> 
            <Button
            btntext= {"Search"}
            className="p-3"
            getDataFromApi ={getDataFromApi}/>
            <HeroInput/>
            </div>
            </Col>
        </Row>
      </Container>
    )

}

export default GalleryHero