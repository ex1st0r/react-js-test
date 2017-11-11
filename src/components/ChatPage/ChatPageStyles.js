/*
 * ChatPage stylesheet
 */

import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    wrapper: {
        flex: 1
    },
    header: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    logoutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        borderWidth: 1,
        borderColor: '#ddd'
    },
    logoutButtonText: {
        fontSize: 26
    },
    messagesBlock: {
        flex: 1,
        justifyContent: 'space-between'
    },
    messagesBlockSend: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopColor: '#ddd',
        borderTopWidth: 1
    },
    messagesBlockInput: {
        flex: 1,
        borderRightWidth: 1,
        borderColor: '#ddd',
        padding: 5
    },
    messagesBlockButtonWrapper: {
        justifyContent: 'center'
    },
    messageListRow: {
        borderTopColor: '#ddd',
        borderTopWidth: 1,
        padding: 10
    },
    backButton: {
        padding: 5,
        borderWidth: 1,
        borderColor: '#ddd'
    }
})