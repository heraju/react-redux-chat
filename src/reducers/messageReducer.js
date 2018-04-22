export default function reducer(state={
  messages: [],
  fetching: false,
  fetched: false,
  error: null
}, action){
  switch(action.type){
    case "FETCH_MESSAGE":{
      return {...state, fetching: true}
    }

  }

  return state
}

