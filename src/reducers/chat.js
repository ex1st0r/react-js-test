import * as actions from '../actions/actions'
import Enums from '../common/enums'

let initialState = {
    appPage: Enums.AppPages.AUTH_PAGE,
    authRequest: false,
    authSuccess: null,
    authError: null,
    authFormEmail: 'y@ya.ru',
    authFormPassword: '123',
    logoutRequest: false,
    logoutSuccess: null,
    logoutError: null,
    ownerId: null,
    token: null,
    level: null,
    activeChatsList: [],
    waitingChatsList: [],
    isInitChatList: false,
    chatMessagesList: [],
    chatInputText: '',
    chatId: null
}

export default function chat(state = initialState, action) {
    switch (action.type) {
        case actions.PERFORM_AUTH_REQUEST:
            return {
                ...state,
                authRequest: true,
                authSuccess: null,
                authError: null
            }

        case actions.PERFORM_AUTH_SUCCESS:
            return {
                ...state,
                authRequest: false,
                authSuccess: true,
                ownerId: action.payload.data.ownerId,
                token: action.payload.data.token,
                level: action.payload.data.level,
            }

        case actions.PERFORM_AUTH_FAILURE:
            return {
                ...state,
                authRequest: false,
                authError: action.payload.data
            }

        case actions.PERFORM_LOGOUT_REQUEST:
            return {
                ...state,
                logoutRequest: true,
                logoutSuccess: null,
                logoutError: null
            }

        case actions.PERFORM_LOGOUT_SUCCESS:
            return {
                ...state,
                logoutRequest: true,
                logoutSuccess: action.payload.data,
            }

        case actions.PERFORM_LOGOUT_FAILURE:
            return {
                ...state,
                logoutRequest: true,
                logoutError: action.payload.data
            }

        case actions.PERFORM_SET_AUTH_EMAIL:
            return {
                ...state,
                authFormEmail: action.payload.data
            }

        case actions.PERFORM_SET_AUTH_PASSWORD:
            return {
                ...state,
                authFormPassword: action.payload.data
            }

        case actions.PERFORM_CHANGE_SCREEN:
            return {
                ...state,
                appPage: action.payload.data
            }

        case actions.PERFORM_SET_CHAT_INPUT_TEXT:
            return {
                ...state,
                chatInputText: action.payload.data
            }

        case actions.CALL_GET_MESSAGES_LIST_SUCCESS:
            return {
                ...state,
                chatMessagesList: action.payload.data
            }

        case actions.CALL_GET_ACTIVE_CHATS_LIST_SUCCESS:
            return {
                ...state,
                activeChatsList: action.payload.data
            }

        case actions.CALL_GET_WAITING_CHATS_LIST_SUCCESS:
            return {
                ...state,
                waitingChatsList: action.payload.data
            }

        case actions.PERFORM_SELECT_CHAT:
            return {
                ...state,
                chatId: action.payload.data
            }

        default:
            return state
    }
}