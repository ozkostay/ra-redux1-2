import { SET_NAME, SET_PRICE, SAVE_REPAIR, CANSEL_REPAIR, EDIT_REPAIR, DELETE_REPAIR, INCREMENT_ID, EDIT_NOW, SET_FILTER} from '../action/phoneVars';



const initialState = {
  name: '',
  price: '',
  maxId: 2,
  editNow: null,
  filterString: '', 
  repairs: [
    { 
      id: 1,
      name: 'Замена стекла',
      price: 2100,
      isEdit: false,
    },
    { 
      id: 2,
      name: 'Замена дисплея',
      price: 21000,
      isEdit: false,
    }
  ]
}

const phoneFormReduser = (state = initialState, action) => {
  switch (action.type) {
    // поле Name
    case SET_NAME:
      // console.log('name', action.payload);
      return {
        ...state,
        name: action.payload,
      }
    // поле Price
    case SET_PRICE:
      return {
        ...state,
        price: action.payload,
      }
    //Кнопка Save
    case SAVE_REPAIR:
      // console.log('save', action.payload);
      return {
        ...state,
        repairs: action.payload,
      }
    //Кнопка Cansel
    case CANSEL_REPAIR:
      return {
        ...state,
      }
    case EDIT_REPAIR:
      // console.log('edit', action.payload);
      return {
        ...state,
        repairs: action.payload,
      }
    case DELETE_REPAIR:
      // console.log('Delete reduc', action.payload);
      return {
        ...state,
        repairs: state.repairs.filter((i) => i.id !== action.payload),
      }
    case INCREMENT_ID:
      return {
        ...state,
        maxId: action.payload,
      }
      case EDIT_NOW:
        return {
          ...state,
          editNow: action.payload,
        }
      case SET_FILTER:
      return {
        ...state,
        filterString: action.payload,
      }
    default:
      return state;
  }
};

export default phoneFormReduser;
