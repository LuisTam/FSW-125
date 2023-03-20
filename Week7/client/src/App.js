import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// form handler and items
import AddAthleteHandler from './AddAthleteHandler';
import Athletes from './Athletes';

function App() {
  const [athletes, setAthletes] = useState([]);

//GET all
  const getAth = () =>{
    axios.get('/athletes')
      .then(res => setAthletes(res.data))
      .catch(err => console.log(err))
  }
//POST one
  const addAth= (newAth) => {
    axios.post('/athletes', newAth)
      .then(res => {
      setAthletes(prevAth => [...prevAth, res.data])
    })
      .catch(err => console.log(err))
  }
//Delete One
  const deleteAth = (itemId) => {
    axios.delete(`/athletes/${itemId}`)
      .then(res => {
      setAthletes(prevAth => prevAth.filter(item => item._id !== itemId))
    })
      .catch(err => console.log(err))
  }
//PUT on one item
  const editAth = (updates, itemId) => {
    axios.put(`/athletes/${itemId}`, updates)
      .then(res => {
      setAthletes(prevAth => prevAth.map(item => item._Id !== itemId ? item : res.data))
    })
      .catch(err => console.log(err))
  }
//GET all items using useEffect hook
  useEffect(() => {
    getAth()
  }, []);
//Creates List of items
  const itemList = athletes.map(item =>
     <Athletes
        {...athletes} 
        deleteAth={deleteAth}
        editAth={editAth}
        key={athletes.name}/>)

  return (
//Add form w/ button
//Displays list to front end
<>
  <div className='addForm'>
    <AddAthleteHandler
      btnText = 'Add Item'
      submit={addAth}/>
  </div>

  <div className='item-container'>
      {itemList}
  </div>
    
</>
  );
}

export default App;

