import { combineReducers } from 'redux'
import user from './user.js'
import page from './page.js'

export default combineReducers({
    user,
    page
})