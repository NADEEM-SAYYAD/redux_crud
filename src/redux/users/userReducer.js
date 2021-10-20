import { 
    USER_REQUEST, 
    USER_FETCH, 
    USER_ADD,  
    USER_UPDATE,
    USER_DELETE,
    USER_ERROR } 
from '../users/userConstant'

const initialState = {
    loading:false,
    data : [],
    error : null
}
const userReducer = (state = initialState,action) => {
    switch(action.type){
        case USER_REQUEST:
            return{
                ...state,
                loading :true,
                error: null
        }
        case USER_FETCH:
            return{
                ...state,
                data : action.payload,
                loading :false,
                error :null,
            }
        case USER_ADD:
            return{
                ...state,
                data : [...state.data,action.payload]
            }
        case USER_ERROR:
            return{
                ...state,
                error: action.error
            }
        case USER_DELETE:
            const filterdData = state.data.filter(u=> u.id !== action.payload);
            return{
                ...state,
                data : filterdData
            }
        case USER_UPDATE:
            const updateData = state.data.map(u=>u.id === action.payload.editId ? {...u,...action.payload.data} :u)
            return{
                ...state,
                data : updateData
            }
        default: return state;
    }
}
export default userReducer