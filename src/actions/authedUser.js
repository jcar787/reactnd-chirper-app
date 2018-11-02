export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export const setAuthUser = id => {
    return {
        type: SET_AUTHED_USER,
        id
    }
}