const initialState = {
    isAuthenticated: false,
    isAuthenticatedUser:false,
    isAuthenticatedOrg:false,
    token : localStorage.getItem('token'),
    user:null
}

const adminReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS_ADMIN': {
            localStorage.setItem('token', action.payload.data.token);
            console.log('LOGIN_SUCCESS_ADMIN actions hits:'); 
            return {
                ...state,
                ...action.payload.data,
                token: action.payload.data.token,
                isAuthenticated: true,
                user: action.payload.data.user
            };
        };
        case 'LOGIN_SUCCESS_USER': {
            localStorage.setItem('token', action.payload.data.token);
            console.log('LOGIN_SUCCESS_USER actions hits:'); 
            return {
                ...state,
                ...action.payload.data,
                token: action.payload.data.token,
                isAuthenticatedUser: true,
                user: action.payload.data.user
            };
        };
        case 'LOGIN_SUCCESS_ORG': {
            localStorage.setItem('token', action.payload.data.token);
            console.log('LOGIN_SUCCESS_ORG actions hits:'); 
            return {
                ...state,
                ...action.payload.data,
                token: action.payload.data.token,
                isAuthenticatedOrg: true,
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