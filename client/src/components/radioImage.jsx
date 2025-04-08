import "../Styles/RadioImage.css"

const RadioImage = ({ radioGroup , image, id, value, setValue, selectedValue, setSelectedValue }) => {

    return (
        <li className="radioImage"><input 
                type="radio" 
                name={radioGroup} 
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    setSelectedValue(value);
                }}
                checked={value === selectedValue}
                id={id}
            />
            <label for={id}><img src={image}/></label>
        </li>
    )
}

export default RadioImage;