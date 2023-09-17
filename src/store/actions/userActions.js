import axios from "axios";
const api = axios.create({
    baseURL: process.env.REACT_APP_URL,
  });
  
  const getToken = () => {
    return localStorage.getItem('token');
  };
  
  api.interceptors.request.use(
    (config) => {
      const token = getToken();
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
export const  getPublicBoats = (body) => async (dispatch) => {
    try{
      const res = await api.get('/api/public/boats', body)
      dispatch({
        type:'GET_PUB_BOAT',
        payload:res.data
      })
        return res.data
    }
    catch(err) {
      throw err
    }
  }

  export const  getPublicOrg = (body) => async (dispatch) => {
    try{
      const res = await api.get('/api/public/organizations', body)
      dispatch({
        type:'GET_PUB_ORG',
        payload:res.data
      })
        return res.data
    }
    catch(err) {
      throw err
    }
  }

  export const  getPubliccAndPrivateBoats = () => async (dispatch) => {
    try{
      const res = await api.get('/api/boats/create',)
      // dispatch({
      //   type:'GET_PUB_BOAT',
      //   payload:res.data
      // })
        return res.data
    }
    catch(err) {
      throw err
    }
  }