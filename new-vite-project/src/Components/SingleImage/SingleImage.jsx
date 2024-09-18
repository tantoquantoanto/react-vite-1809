import { Col } from "react-bootstrap"

const SingleImage = ({imgUrl, }) => {
    return(
        <Col
        sm = {12}
        md = {4}
        lg = {3}>

       <img src={imgUrl} alt="" />
        </Col>

    )
}

export default SingleImage