const initialState = {
    isAuthenticated: false,
    token : localStorage.getItem('token'),
    user:null
}

const adminReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS': {
            localStorage.setItem('token', action.payload.data.token);
            console.log('LOGIN_SUCCESS action:', action.payload.data); 
            return {
                ...state,
                ...action.payload.data,
                token: action.payload.data.token,
                isAuthenticated: true,
                user: action.payload.data.user
            };
        };
        case 'LOGOUT_SUUCCESS' : {
            localStorage.removeItem('token')
            return {
                token: null,
                isAuthenticated: false,
              };
        };
        default :  return state
        
    }
}

export default adminReducer