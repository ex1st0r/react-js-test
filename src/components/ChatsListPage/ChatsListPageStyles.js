/*
 * ChatListPage stylesheet
 */

import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 10
    },
    pageName: {
        alignItems: 'center',
        marginBottom: 20
    },
    pageNameText: {
        fontSize: 32
    },
    chatListRow: {
        padding: 10,
        borderColor: '#ddd',
        borderWidth: 1,
        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    headerSearchInput: {
        width: 200,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 5
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
    }
})