import ACT from './Action'

const reducers = (state, action) => {
    switch (action.type) {
        case ACT.NOTIFY:
            return {
                ...state,
                notify: action.payload
            }
        case ACT.AUTH:
            return {
                ...state,
                auth: action.payload
            }
        default:
            return state
    }
}

export default reducers