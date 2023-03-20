import { useState } from "react";
import AddFormHandler from "./AddFormHandler";

function Item({deleteItem, editItem, name, description, ppu, _id}){
//Handle toggle of buttons
    const [editToggle, setEditToggle] = useState(false)
    return(
//Creation of delete and edit buttons and contains item information
        <div className="listItems">
            { !editToggle ?
        <>
            <h1>Item: {name}</h1>
            <p>Description: {description}</p>
            <p>Price: {ppu}</p>
        <button 
            onClick={() => deleteItem(_id)} 
            className="deleteBtn">
            Delete
        </button>

        <button 
            onClick={() => setEditToggle(prevToggle => !prevToggle)}
            className="editBtn">
            Edit
         </button>
        </>

          :
//Creates form and a close button for toggle
        <>
        <AddFormHandler
            name={name}
            description={description}
            price={ppu}
            _id={_id}
            btnText= 'Edit'
            submit={editItem}/>

        <button
            onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Close
        </button>
        </>
            }
        </div>
     
    );
}

export default Item;