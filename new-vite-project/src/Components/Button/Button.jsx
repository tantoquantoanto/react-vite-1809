



const Button = ({btntext, btnStyle}) => {
    return (
        <button
        onClick={getDataFromApi()}
        className={`btn btn-info ${btnStyle}`}>
            {btntext}
        </button>
    )
}

export default Button