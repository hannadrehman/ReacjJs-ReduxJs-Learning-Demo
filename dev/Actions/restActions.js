import axios from 'axios';

export function fetchUsers(){
    return (dispatch)=>{
        dispatch({type:'FETCH_USER_START'});
            axios.get('http://rest.learncode.academy/api/wstern/users')
        .then((response)=>{
            dispatch({type:'FETCH_USER_FINISHED',payload:response.data});
        })
        .catch((error)=>{
            dispatch({type:'FETCH_USER_ERROR',payload:error});
        });
    }
}