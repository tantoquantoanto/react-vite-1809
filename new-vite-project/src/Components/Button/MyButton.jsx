



const MyButton = ({btntext, btnStyle, getDataFromApi}) => {
    return (
        <button
        onClick={getDataFromApi}
        className={`btn btn-info ${btnStyle}`}>
            {btntext}
        </button>
    )
}

export default MyButton