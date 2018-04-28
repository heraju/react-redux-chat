export default function reducer(state={
  authUser: null,
  }, action){
  switch(action.type){
    case "AUTH_USER_SET":{
      debugger;
      return {...state, authUser: action.payload}
    }
  }
  return state
}

