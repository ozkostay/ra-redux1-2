import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import changeNumber, { setUserValue } from '../action/changeNumber';

export default function MainApp2() {
  const dispatch = useDispatch();
  const { value: numberValue, userValue } = useSelector(state => state.number);

  const submitHandler = (e) => {
    e.preventDefault();
    changeNumber(dispatch)(userValue);
  }

  // console.log('numberValue', numberValue, 'userValue', userValue);

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input type='number' required value={userValue} onChange={(e) => { setUserValue(dispatch)(e.target.value) }} />
      </div>
      <div>
        <button>Changee number</button>
      </div>
      {numberValue}
    </form>
  );
}
