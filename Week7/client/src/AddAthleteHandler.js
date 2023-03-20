import { useState } from "react";

function AddAthleteHandler({submit, btnText, name, sport, net, _id}){
    const initialInputs = {name: name || '' , sport: sport || '' , net: net || ''}
    const [inputs, setInputs] = useState(initialInputs)
//Handles any changes done
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value }))
    }
//Handles a submit request.  
    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id);
        setInputs(initialInputs)
    }

    return(
//Creates form for submitting new things as well as changes
<form onSubmit={handleSubmit}>
        <input
            type='text'
            name='name'
            value={inputs.name}
            onChange={handleChange}
            placeholder='Athelete'
        />
        <input
            type='text'
            name='sport'
            value={inputs.description}
            onChange={handleChange}
            placeholder='Sport'
        />
        <input
            type='text'
            name='net'
            value={inputs.price}
            onChange={handleChange}
            placeholder='Net Worth'
        />
        <button>{btnText}</button>

</form>
    )
}

export default AddAthleteHandler;