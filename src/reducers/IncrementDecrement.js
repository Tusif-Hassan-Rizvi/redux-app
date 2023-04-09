const InitialState=0;

const ChangeNumber=(state=InitialState, action)=>{
    switch(action.type){
        case "INCREMENT":return state+action.payload;
        case "DECREMENT":return state>0?state-action.payload:state;
        default:return state;
    }
}

export default ChangeNumber;