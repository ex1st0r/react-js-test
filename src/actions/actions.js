export const PERFORM_AUTH = 'PERFORM_AUTH'
export const PERFORM_AUTH_REQUEST = 'PERFORM_AUTH_REQUEST'
export const PERFORM_AUTH_SUCCESS = 'PERFORM_AUTH_SUCCESS'
export const PERFORM_AUTH_FAILURE = 'PERFORM_AUTH_FAILURE'

export const PERFORM_LOGOUT = 'PERFORM_LOGOUT'
export const PERFORM_LOGOUT_REQUEST = 'PERFORM_LOGOUT_REQUEST'
export const PERFORM_LOGOUT_SUCCESS = 'PERFORM_LOGOUT_SUCCESS'
export const PERFORM_LOGOUT_FAILURE = 'PERFORM_LOGOUT_FAILURE'

export const PERFORM_SET_AUTH_EMAIL = 'PERFORM_SET_AUTH_EMAIL'
export const PERFORM_SET_AUTH_PASSWORD = 'PERFORM_SET_AUTH_PASSWORD'

export const PERFORM_CHANGE_SCREEN = 'PERFORM_CHANGE_AUTH_SCREEN'
export const PERFORM_SET_CHAT_INPUT_TEXT = 'PERFORM_SET_CHAT_INPUT_TEXT'

export const CALL_GET_MESSAGES_LIST_SUCCESS = 'CALL_GET_MESSAGES_LIST_SUCCESS'

export const CALL_GET_ACTIVE_CHATS_LIST_SUCCESS = 'CALL_GET_ACTIVE_CHATS_LIST_SUCCESS'
export const CALL_GET_WAITING_CHATS_LIST_SUCCESS = 'CALL_GET_WAITING_CHATS_LIST_SUCCESS'

export const PERFORM_SELECT_CHAT = 'PERFORM_SELECT_CHAT'
export const PERFORM_INIT_CHAT_LIST = 'PERFORM_INIT_CHAT_LIST'

/*
 * Thunk dispatched by "AuthPage" screen. Action used to perform authorization.
 *
 */
export const performAuth = () => ({
    type: PERFORM_AUTH,
    payload: {}
})

/*
 * Action dispatched in thunk "performAuth".
 *
 */
export const performAuthRequest = () => ({
    type: PERFORM_AUTH_REQUEST,
    payload: {}
})

/*
 * Action dispatched in thunk "performAuth".
 *
 */
export const performAuthSuccess = (response) => ({
    type: PERFORM_AUTH_SUCCESS,
    payload: {
        data: response
    }
})

/*
 * Action dispatched in thunk "performAuth".
 *
 */
export const performAuthFailure = (error) => ({
    type: PERFORM_AUTH_FAILURE,
    payload: {
        data: error
    }
})

/*
 * Action dispatched in thunk "performLogout". Thunk used to perform logout.
 *
 */
export const performLogout = () => ({
    type: PERFORM_LOGOUT,
    payload: {}
})

/*
 * Action dispatched in thunk "performLogout".
 *
 */
export const performLogoutRequest = () => ({
    type: PERFORM_LOGOUT_REQUEST,
    payload: {}
})

/*
 * Action dispatched in thunk "performLogout".
 *
 */
export const performLogoutSuccess = (response) => ({
    type: PERFORM_LOGOUT_SUCCESS,
    payload: {
        data: response
    }
})

/*
 * Action dispatched in thunk "performLogout".
 *
 */
export const performLogoutFailure = (error) => ({
    type: PERFORM_LOGOUT_FAILURE,
    payload: {
        data: error
    }
})

/*
 * Action dispatched in thunk "performSetAuthEmail".
 *
 */
export const performSetAuthEmail = (email) => ({
    type: PERFORM_SET_AUTH_EMAIL,
    payload: {
        data: email
    }
})

/*
 * Action dispatched in thunk "performSetAuthPassword".
 *
 */
export const performSetAuthPassword = (name) => ({
    type: PERFORM_SET_AUTH_PASSWORD,
    payload: {
        data: name
    }
})

/*
 * Action dispatched in thunk "performChangeScreen".
 *
 */
export const performChangeScreen = (page) => ({
    type: PERFORM_CHANGE_SCREEN,
    payload: {
        data: page
    }
})

/*
 * Action dispatched in thunk "performSetChatInputText".
 *
 */
export const performSetChatInputText = (text) => ({
    type: PERFORM_SET_CHAT_INPUT_TEXT,
    payload: {
        data: text
    }
})

/*
 * Action dispatched in thunk "callGetMessagesList".
 *
 */
export const callGetMessagesListSuccess = (msgList) => ({
    type: CALL_GET_MESSAGES_LIST_SUCCESS,
    payload: {
        data: msgList
    }
})

/*
 * Action dispatched in thunk "callGetActiveChatsList".
 *
 */
export const callGetActiveChatsListSuccess = (chatsList) => ({
    type: CALL_GET_ACTIVE_CHATS_LIST_SUCCESS,
    payload: {
        data: chatsList
    }
})

/*
 * Action dispatched in thunk "callGetWaitingChatsList".
 *
 */
export const callGetWaitingChatsListSuccess = (chatsList) => ({
    type: CALL_GET_WAITING_CHATS_LIST_SUCCESS,
    payload: {
        data: chatsList
    }
})

/*
 * Action dispatched in thunk "performSelectChat".
 *
 */
export const performSelectChat = (chatId) => ({
    type: PERFORM_SELECT_CHAT,
    payload: {
        data: chatId
    }
})