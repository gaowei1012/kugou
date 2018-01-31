import {combineReducers} from 'redux'
import {SET_List, PLAY_SONG, PLAY_STATE, PLAY_LOADING, TOGGLE_QUERY} from '../action/index'

const initState = {
    audio: {

    },
    head: {

    },
    showQuery: false,
    audioLoadding: false,
    listenCount: 0,
    player: {
        detaiPlayerFlag: false,
        showPlayer: false,
        isPlay: false
    },
    listInfo: {
        songList: [],
        songIndex: 0
    }
}

function change_song(state = initState, action) {
    switch (action.type) {
        case SET_List:
            return Object.assign({}, state, action.data)
        case PLAY_SONG:
            return Object.assign({}, state, action.data)
            case PLAY_STATE:
            return Object.assign({},state,action.data)
        case PLAY_LOADING:
            return Object.assign({},state,action.data)
        case TOGGLE_QUERY:
            return Object.assign({},state,action.data)
        default:
            return state    
    }
}

export default combineReducers({
    change_song
})