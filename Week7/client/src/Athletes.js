import { useState } from "react";
import AddAthleteHandler  from './AddAthleteHandler'


function Athletes({deleteAth, editAth, name, sport, net, _id}){
    //Handle toggle of buttons
        const [editToggle, setEditToggle] = useState(false)
        return(
    //Creation of delete and edit buttons and contains item information
            <div className="listItems">
                { !editToggle ?
            <>
                <h1>Athelete: {name}</h1>
                <p>Sport: {sport}</p>
                <p>*Net Worth(Millions): {net}</p>
            <button 
                onClick={() => deleteAth(_id)} 
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
            <AddAthleteHandler
                name={name}
                sport={sport}
                net={net}
                _id={_id}
                btnText= 'Edit'
                submit={editAth}/>
    
            <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Close
            </button>
            </>
                }
            </div>
         
        );
    }
    
    export default Athletes;