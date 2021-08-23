import axios from "axios";


export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchShavas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  })
  axios.get(`http://localhost:3001/shavas?category=${category}`).then(({data}) => {
    dispatch(setShavas(data));
  });
};

export const setShavas = (items) => ({
  type: 'SET_SHAVAS',
  payload: items,
});