import "./hero.css"
import { Button, Col, Container, Row } from "react-bootstrap"
import HeroInput from "./HeroInput/HeroInput"
import MyButton from "../Button/MyButton"


const GalleryHero = ({query, setQuery, getDataFromApi, setMaxPicNumber}) => {

    return (
      <Container>
        <Row>
            <Col className="py-2">
            <div className="d-flex gap-2 align-items-center justify-content-center"> 
            <HeroInput
            query={query}
            setQuery={setQuery}
            setMaxPicNumber={setMaxPicNumber}/>
            <MyButton 
            btntext= {"Search"}
            className="m-0"
            getDataFromApi ={getDataFromApi}/>
            
            </div>
            </Col>
        </Row>
      </Container>
    )

}

export default GalleryHero