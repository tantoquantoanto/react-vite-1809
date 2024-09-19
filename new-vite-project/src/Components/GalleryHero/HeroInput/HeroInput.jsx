import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const HeroInput = ({ setQuery, setMaxPicNumber}) => {
    const onChangeInput = (e) => {
        setQuery(e.target.value)

    }

    const onChangeMaxPictures = (e) => {
        setMaxPicNumber(e.target.value)

    }


    return (
        <InputGroup>
        <Form.Select
        onChange={onChangeMaxPictures}
        >
            <option value="">Immagini per pagina</option>
            <option value="8">8</option>
            <option value="16">16</option>
            <option value="24">24</option>
        </Form.Select>
        <Form.Control
        placeholder='cerca immagine'
        onChange={onChangeInput}
        aria-label="Text input with dropdown button" />
      </InputGroup>
    )


}
export default HeroInput