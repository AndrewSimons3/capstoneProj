export const fetchCandidates = () => {
  return (dispatch) => {
      fetch('http://localhost:8080/electiondata')
      .then(res => res.json())
      .then(response => {
          const action = {
              type: 'FETCH_CANDIDATES',
              value: response
          }
          dispatch(action)
      })
  }
}
