import * as actions from './actions'
import SocketManager from '../services/SocketManager'
import * as DataProvider from '../services/DataProvider'
import * as thunks from './thunks'
import Enums from '../common/enums'

/*
 * Thunk dispatched by "AuthPage" screen.  Thunk used to perform authorization.
 */
export const performAuth = () => (dispatch, getState) => {
    let state = getState()
    let reducerState = state.chat

    let email = reducerState.authFormEmail
    let password = reducerState.authFormPassword

    dispatch(actions.performAuth())

    dispatch(actions.performAuthRequest())

    return DataProvider.getOwnerAuth(email, password)
        .then(
            (data) => {
                data.json().then((data) => {
                    dispatch(actions.performAuthSuccess(data.data))
                    dispatch(thunks.performNavigateToChatListScreen())
                })
            })
        .catch((error) => dispatch(actions.performAuthFailure(error)))

}

/*
 * Thunk used to perform logout.
 */
export const performLogout = () => (dispatch, getState) => {
    let state = getState()
    let reducerState = state.chat

    let ownerToken = reducerState.token

    dispatch(actions.performLogout())

    dispatch(actions.performLogoutRequest())

    DataProvider.getOwnerLogout(ownerToken)
        .then(
            (data) => {
                dispatch(actions.performLogoutSuccess(data))
                dispatch(thunks.performNavigateToAuthScreen())
            },
            (error) => dispatch(actions.performLogoutFailure(error))
        )


}

/*
 * Thunk dispatched by "AuthPage" screen.  Thunk used to set auth email.
 */
export const performSetAuthEmail = (email) => (dispatch, getState) => {

    dispatch(actions.performSetAuthEmail(email))

}

/*
 * Thunk dispatched by "AuthPage" screen.  Thunk used to set auth name.
 */
export const performSetAuthPassword = (name) => (dispatch, getState) => {

    dispatch(actions.performSetAuthPassword(name))

}

/*
 * Thunk is used for navigate to screens.
 */
export const performChangeScreen = (page) => (dispatch, getState) => {

    dispatch(actions.performChangeScreen(page))

}

/*
 * Thunk calling for navigate to auth page.
 */
export const performNavigateToAuthScreen = () => (dispatch, getState) => {
    let state = getState()
    let reducerState = state.chat

    dispatch(thunks.performChangeScreen(Enums.AppPages.AUTH_PAGE))

}

/*
 * Thunk calling for navigate to chat list screen.
 */
export const performNavigateToChatListScreen = () => (dispatch, getState) => {

    let socket = new SocketManager()

    dispatch(thunks.callChatsList())

    dispatch(thunks.performChangeScreen(Enums.AppPages.CHAT_LIST_PAGE))
}

/*
 * Thunk calling for navigate to chat list screen
 */
export const performNavigateToChatScreen = () => (dispatch, getState) => {

    dispatch(thunks.callGetMessagesList())

    dispatch(thunks.performChangeScreen(Enums.AppPages.CHAT_PAGE))
}

/*
 * Thunk using for send message.
 */
export const callSendMessage = () => (dispatch, getState) => {
    let state = getState()
    let reducerState = state.chat

    let chatId = reducerState.chatId
    let token = reducerState.token
    let message = reducerState.chatInputText

    let socket = new SocketManager()

    socket.sendNewMessage({
        chatId,
        token,
        message,
        callback: () => {
            // Clear input field after send message
            dispatch(thunks.performSetChatInputText(''))

            dispatch(thunks.callGetMessagesList())
        }
    })
}

/*
 * Thunk dispatched by "ChatPage" screen.  Thunk set input message text.
 */
export const performSetChatInputText = (text) => (dispatch, getState) => {

    dispatch(actions.performSetChatInputText(text))
}

/*
 * Thunk dispatched by "ChatPage" screen. Thunk call for get message list.
 */
export const callGetMessagesList = () => (dispatch, getState) => {
    let state = getState()
    let reducerState = state.chat

    let chatId = reducerState.chatId
    let token = reducerState.token

    let socket = new SocketManager()

    socket.getChatMessages({
        chatId,
        token,
        callback: (msgList) => dispatch(actions.callGetMessagesListSuccess(msgList))
    })
}

/*
 * Thunk dispatched by "ChatListPage" screen. Thunk call for get chat list.
 */
export const callChatsList = () => (dispatch, getState) => {
    let state = getState()
    let reducerState = state.chat

    let socket = new SocketManager()

    // socket.offChatMessages()

    dispatch(thunks.callGetActiveChatsList())

    dispatch(thunks.callGetWaitingChatsList())

}

/*
 * Thunk dispatched by "ChatListPage" screen. Thunk call for get active chats.
 */
export const callGetActiveChatsList = () => (dispatch, getState) => {
    let state = getState()
    let reducerState = state.chat

    let token = reducerState.token

    let socket = new SocketManager()

    socket.getActiveChats({
        token,
        callback: (data) => dispatch(actions.callGetActiveChatsListSuccess(data.data))
    })
}

/*
 * Thunk dispatched by "ChatListPage" screen. Thunk call for get waiting chats.
 */
export const callGetWaitingChatsList = () => (dispatch, getState) => {
    let state = getState()
    let reducerState = state.chat

    let token = reducerState.token

    let socket = new SocketManager()

    socket.getWaitingChats({
        token,
        callback: (data) => dispatch(actions.callGetWaitingChatsListSuccess(data.data))
    })
}

/*
 * Thunk dispatched by "ChatPageList" screen. Thunk perform for selecting chat and navigate to ChatPage.
 */
export const performSelectChat = (chatId) => (dispatch, getState) => {

    dispatch(actions.performSelectChat(chatId))

    dispatch(thunks.performNavigateToChatScreen())

}
