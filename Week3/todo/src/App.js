import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Items from './Items'
import AddFormHandler  from './AddFormHandler';

function App() {
  const [recycledItems, setRecycledItems] = useState([]);


  const getItems = () =>{
    axios.get('/recycled-items')
    .then(res => setRecycledItems(res.data))
    .catch(err => console.log(err))
  }
  
  const addItem = (newItem) => {
    axios.post('/recycled-Items', newItem)
    .then(res => {
      setRecycledItems(prevItem => [...prevItem, res.data])
    })
    .catch(err => console.log(err))
  }

  const deleteItem = (itemId) => {
    axios.delete(`/recycled-items/${itemId}`)
    .then(res => {
      setRecycledItems(prevItem => prevItem.filter(item => item._id !== itemId))
    })
    .catch(err => console.log(err))
  }

  const editItem = (updates, itemId) => {
    axios.put(`/recycled-items/${itemId}`, updates)
    .then(res => {
      setRecycledItems(prevItem => prevItem.map(item => item._Id !== itemId ? item : res.data))
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getItems()
  }, []);

  const itemList = recycledItems.map(item =>
     < Items 
        {...item} 
        deleteItem={deleteItem}
        editItem={editItem}
        key={recycledItems.name}/>)

  return (
    <>
    <div className='addForm'>
      <AddFormHandler 
      btnText = 'Add Item'
      submit={addItem}/>
      </div>
    <div className='item-container'>
      {itemList}
    </div>
    </>
  );
}

export default App;
