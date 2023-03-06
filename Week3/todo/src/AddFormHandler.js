import { useState } from "react";

function AddFormHandler({submit, btnText, name, description, price, _id}){
    const initialInputs = {name: name || '' , description: description || '' , price: price || ''}
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs(prevInputs => ({...prevInputs, [name]: value }))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        submit(inputs, _id);
        setInputs(initialInputs)
    }

    return(
    <form onSubmit={handleSubmit}>
        <input
            type='text'
            name='name'
            value={inputs.name}
            onChange={handleChange}
            placeholder='Item'
        />
        <input
            type='text'
            name='description'
            value={inputs.description}
            onChange={handleChange}
            placeholder='Description'
        />
        <input
            type='text'
            name='price'
            value={inputs.price}
            onChange={handleChange}
            placeholder='Price'
        />
        <button>{btnText}</button>

    </form>
    )
}

export default AddFormHandler;