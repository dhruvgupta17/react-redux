import {createStore} from 'redux'
import bookreducer from'../reducers/reducers'
const store = createStore(bookreducer)
export default store;