export default function(state={},action){
    const newState=Object.assign({},state);
    switch (action.type){
        case 'FETCH_USER_START':{
            newState.fetching=true;
            newState.fetched=false;
         break;
        }
        case 'FETCH_USER_FINISHED':{
            newState.fetching=false;
            newState.fetched=true;
            newState.users=action.payload;
         
         break;
        }
        case 'FETCH_USER_ERROR':{
            newState.fetching=false;
            newState.fetched=false;
            newState.error=action.payload;
            
         break;
        }
    }
    return newState;

}