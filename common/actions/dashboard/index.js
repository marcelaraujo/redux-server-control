// define action types
export const GET_STATISTICS_SUCCESS = 'GET_STATISTICS_SUCCESS'
export const GET_STATISTICS_FAIL = 'GET_STATISTICS_FAIL'
export const RANDOM_ACTION = 'RANDOM_ACTION'
import {emitActionToServer} from 'socket_logic'

export const SEND_EVENT_TO_SERVER = async (data) => {
    emitActionToServer(data)
    return {type: 1}
}
