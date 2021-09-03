import axios from "axios";


export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export const fetchShavas = (sortBy, category) => (dispatch) => {
  dispatch({
    type: 'SET_LOADED',
    payload: false,
  });
  axios
    .get(`/shavas?${
      category !== null ? `category=${category}` : ''
    }&_sort=${sortBy.type}&_order=${sortBy.order}`,
    )
    .then(({data}) => {
      dispatch(setShavas(data));
    });
};

export const setShavas = (items) => ({
  type: 'SET_SHAVAS',
  payload: items,
});