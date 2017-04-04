export default function(state={},action){
    var newState=Object.assign({},state);
    
    if(action.type=='CHANGE_NAME'){
        newState.name=action.payload;
    }

    if(action.type=='CHANGE_AGE'){
        newState.age=action.payload;
            
    }
    return newState;
};
