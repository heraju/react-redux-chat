export default function reducer(state={
  friends: [],
  fetching: false,
  fetched: false,
  error: null
}, action){
  switch(action.type){
    case "FETCH_FRIENDS":{
      return {...state, fetching: true, fetched: false}
    }
    case "FETCH_FRIENDS_FULFILLED":{
      return {...state, fetching: false, fetched: true, friends: action.payload}
    }

  }

  return state
}

