import axios from 'axios'
import {
    USER_REQUEST,
    USER_FETCH,
    USER_ADD,
    USER_UPDATE,
    USER_DELETE,
    USER_ERROR
}
    from '../../redux/users/userConstant';
const userRequest = () => {
    return {
        type: USER_REQUEST,
    }
}
const userFetch = (data) => {
    return {
        type: USER_FETCH,
        payload: data
    }
}
const userAdd = (data) => {
    return {
        type: USER_ADD,
        payload :data
    }
}
const userUpdate = (editId,data) => {
    return {
        type: USER_UPDATE,
        payload:{
            editId,
            data
        }
    }
}
const userDelete = (del_id) => {
    return {
        type: USER_DELETE,
        payload : del_id
    }
}
const userError = (error) => {
    return {
        type: USER_ERROR,
        error: error
    }
}
export const getUsersData = () => {
    return dispatch => {
        dispatch(userRequest())
        axios.get('https://6145a73f38339400175fc690.mockapi.io/users')
            .then(res => {
                dispatch(userFetch(res.data))
            })
            .catch(error => {
                console.log(error)
                dispatch(userError("Something went wrong"))
            })
    }
}
export const deleteUsersData = (del_id) => {
    return dispatch=>{
        dispatch(userRequest())
        axios.delete(`https://6145a73f38339400175fc690.mockapi.io/users/${del_id}`)
        .then(res=>{
            if(res.statusText === "OK"){
                dispatch(userDelete(del_id))
            }
        })
        .catch(error => {
            console.log(error)
            dispatch(userError("Something went wrong"))
        })
    }
}
export const addUserData = (user) =>{
    return dispatch =>{
        dispatch(userRequest())
        axios.post('https://6145a73f38339400175fc690.mockapi.io/users',user)
        .then(res=>{
            if(res.statusText === "Created"){
                dispatch(userAdd(res.data))
            }
        })
        .catch(error => {
            console.log(error)
            dispatch(userError("Something went wrong"))
        })
    }
}
export const udpateUserData = (editId,userObj) =>{
    return dispatch=>{
        dispatch(userRequest())
        axios.put(`https://6145a73f38339400175fc690.mockapi.io/users/${editId}`,
        userObj)
        .then(res=>{
            if(res.statusText === "OK"){
                dispatch(userUpdate(editId,res.data))
            }
        })
        .catch(error => {
            dispatch(userError("Something went wrong"))
        })
    }
}