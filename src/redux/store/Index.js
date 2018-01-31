import {} from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer/index'

export default function configureStore(initState) {
    const store = createStore(reducer, initState, applyMiddleware(thunk))
    return store;
}