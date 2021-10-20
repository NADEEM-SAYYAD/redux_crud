import React,{useEffect} from 'react'
import AdduserForm from './AdduserForm'
import { useDispatch } from 'react-redux'
import {getUsersData,addUserData} from '../redux/index'
import { useHistory } from 'react-router-dom'

const AddUser = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const addUserHandler = (user) =>{
        if(user){
            dispatch(addUserData(user))
            history.push('/')
        }
    }
    useEffect(()=>{
        dispatch(getUsersData())
    },[])
    return (
        <div>
            <AdduserForm addUserHandler={addUserHandler}/>
        </div>
    )
}
export default AddUser