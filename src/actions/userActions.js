export function fetchUser() {
  return {
    type: "FETCH_USER_FULFILLED",
    payload: {
      name: "Hemanth",
      id: 1
    }
  }
}

