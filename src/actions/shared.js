import {getInitialData} from '../utils'
import {receiveUsers} from './users'
import {receiveTweets} from './tweets'

export const handleInitialData = () => {
    return dispatch => {
        return getInitialData()
        .then(({users, tweets})=> {
            dispatch(receiveUsers(users))
            dispatch(receiveTweets(tweets))
        }) 
    }
}