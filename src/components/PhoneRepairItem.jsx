import React from "react";
import { useDispatch } from 'react-redux';
import setNameValue, { setPriceValue, deleteValue, editNowId } from '../action/phoneRepairActions';


export default function PhoneRepairItem({item}) {
  // store
  const dispatch = useDispatch();
  
  function editHandler(id) {
    console.log()
    setNameValue(dispatch)(item.name);
    setPriceValue(dispatch)(item.price);
    editNowId(dispatch)(item.id);
  }
  
  function deleteHandler(id) {
    deleteValue(dispatch)(id);
  }
  
  return (
    <>
      <li>
        {item.name} {item.price} 
        <button onClick={() => editHandler(item.id)}>E</button>
        <button onClick={() => deleteHandler(item.id)}>D</button>
      </li>
    </>
  );
}
