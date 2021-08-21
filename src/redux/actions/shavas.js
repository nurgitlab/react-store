import axios from "axios";


export const fetchShavas = () => (dispatch) => {
  axios.get('http://localhost:3001/shavas').then(({data}) => {
    dispatch(setShavas(data));
  });
};

export const setShavas = (items) => ({
  type: 'SET_SHAVAS',
  payload: items,
});