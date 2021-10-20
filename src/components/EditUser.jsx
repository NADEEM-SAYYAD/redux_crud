import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import AdduserForm from './AdduserForm';
import  {udpateUserData} from '../redux/index';
import { useHistory } from 'react-router-dom';

const EditUser = () =>{
    const history = useHistory();
    const userId = useParams().userId;
    const userData = useSelector(state=>state.user)
    const editData = userData.data.filter(u=>u.id === userId)[0];
    const dispatch = useDispatch();

    const addUserHandler = (obj) =>{
        if(obj){
            dispatch(udpateUserData(userId,obj))
            history.push('/');
        }
    }
    return(
        <AdduserForm {...editData} addUserHandler={addUserHandler}/>
    )
}
export default EditUser;