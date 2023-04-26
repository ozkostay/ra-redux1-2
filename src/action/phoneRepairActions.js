import { SET_NAME, SET_PRICE, SAVE_REPAIR, CANSEL_REPAIR, EDIT_REPAIR, DELETE_REPAIR, INCREMENT_ID, EDIT_NOW, SET_FILTER} from '../action/phoneVars';

// Поле Name
export const setNameValue = (dispatch) => (nameValue) => {
  const action = {
    type: SET_NAME,
    payload: nameValue,
  }
  dispatch(action);
}

export const setPriceValue = (dispatch) => (priceValue) => {
  const action = {
    type: SET_PRICE,
    payload: priceValue,
  }
  dispatch(action);
}

export const saveValue = (dispatch) => (repairValue) => {
  const action = {
    type: SAVE_REPAIR,
    payload: repairValue,
  }
  dispatch(action);
}

export const canselValue = (dispatch) => () => {
  const action = {
    type: CANSEL_REPAIR,
    // payload: repairValue,
  }
  dispatch(action);
}

export const editValue = (dispatch) => (id) => {
  const action = {
    type: EDIT_REPAIR,
    payload: id,
  }
  dispatch(action);
}

export const deleteValue = (dispatch) => (id) => {
  const action = {
    type: DELETE_REPAIR,
    payload: id,
  }
  dispatch(action);
}

export const incrementId = (dispatch) => (newId) => {
  const action = {
    type: INCREMENT_ID,
    payload: newId,
  }
  dispatch(action);
}

export const editNowId = (dispatch) => (id) => {
  const action = {
    type: EDIT_NOW,
    payload: id,
  }
  dispatch(action);
}  

export const setFilter = (dispatch) => (str) => {
  const action = {
    type: SET_FILTER,
    payload: str,
  }
  dispatch(action);
}  

export default setNameValue;
