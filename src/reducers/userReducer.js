export default function reducer(state = {
  user: null,
  fetching: false,
  fetched: false,
  error: null
}, action){
  switch(action.type){
    case "FETCH_USER":{
      return {...state, fetching: true}
    }
    case "FETCH_USER_FULFILLED":{
      return {...state, fetching: false, fetched: true, user: action.payload}
    }
    case "DISCARD_USER":{
      debugger;
      return {...state, fetching: false, fetched: false, user: null}
    }
  }

  return state
}
