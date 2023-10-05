import axios from 'axios';

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
export const adminLogin = ({ email, password }) => async (dispatch) => {
  const body = {
    email,
    password,
  };

  try {
    const res = await axios.post(`${process.env.REACT_APP_URL}/api/login`, body, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if(res.data.data.user.role == "admin"){
      dispatch({
        type: 'LOGIN_SUCCESS_ADMIN',
        payload: res.data,
      });
      return { res };
    }
    else if(res.data.data.user.role == "user"){
      dispatch({
        type: 'LOGIN_SUCCESS_USER',
        payload: res.data,
      });
      return { res };
    }
    else if(res.data.data.user.role == "organization"){
      dispatch({
        type: 'LOGIN_SUCCESS_ORG',
        payload: res.data,
      });
      return { res };
    }

   


  } catch (err) {
    // Handle the error
    throw err;
  }
};


export const adminLogOut = () => (dispatch) => {
    dispatch({
        type: 'LOGOUT_SUUCCESS'
      });
}

export const addBoat =  (body) => async (dispatch) => {
  console.log(body)
  try{
    const res = await api.post('/api/boats', body)
    dispatch({
    type:'ADD_BOAT',
    payload:res.data
  })
    return res
  }
  catch(err){
    throw err
  }

}

export const  addOrg = (body) => async (dispatch) => {
  try{
    const res = await api.post('/api/organizations', body)
    dispatch({
      type:'ADD_ORG',
      payload:res.data
    })
      return res
  }
  catch(err) {
    throw err
  }
}

export const getOrg = () => async(dispatch) => {
  try{
    const res = await api.get('/api/organizations')
    dispatch({
      type:'GET_ORG',
      payload:res.data
    })
      return res

  }
  catch(err){
    throw err
  }
}

export const  addOrgBoat = (body) => async (dispatch) => {
  try{
    const res = await api.post('/api/organization_boats', body)
    dispatch({
      type:'ADD_ORG_BOAT',
      payload:res.data
    })
      return res
  }
  catch(err) {
    throw err
  }
}

export const  getUsers = () => async (dispatch) => {
  try{
    const res = await api.get('/api/all/users')
    dispatch({
      type:'GET_USERS',
      payload:res.data
    })
      return res
  }
  catch(err) {
    throw err
  }
}
export const  shareBoat = (body) => async (dispatch) => {
  try{
    const res = await api.post('/api/assign/organization_boats', body)
    dispatch({
      type:'SHARE_BOAT',
      payload:res.data
    })
      return res
  }
  catch(err) {
    throw err
  }
}
export const  getAssignedBoats = () => async (dispatch) => {
  try{
    const res = await api.get('/api/share/boats',)
    dispatch({
      type:'ASSIGNED_BOATS',
      payload:res.data
    })
      return res
  }
  catch(err) {
    throw err
  }
}