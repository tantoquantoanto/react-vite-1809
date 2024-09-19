import { Col } from "react-bootstrap"

const SingleImage = ({imgUrl, }) => {
    return(
        <Col
        sm 
        md = {4}
        lg = {3}>

       <img 
       className=" h-100 w-100 object-fit-cover"
       src={imgUrl} alt="" />
        </Col>

    )
}

export default SingleImage