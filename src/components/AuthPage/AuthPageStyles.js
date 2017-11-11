/*
 * AuthPage stylesheet
 */

import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    wrapper: {
        paddingTop: 50,
        paddingLeft: 50,
        paddingRight: 50,
        alignItems: 'center'
    },
    pageNameWrapper: {
        marginBottom: 20
    },
    pageNameText: {
        fontSize: 32
    },
    formWrapper: {
        alignItems: 'center'
    },
    formInput: {
        width: 250,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 20,
        padding: 5,
        fontSize: 16
    },
    formPasswordInput: {
        marginBottom: 40,

    },
    formSubmitButton: {
        borderWidth: 1,
        width: 120,
        borderColor: '#ddd',
        padding: 5,
        alignItems: 'center'
    },
    formSubmitButtonText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    authMessageBlock: {
        marginTop: 20,
        padding: 20,
        backgroundColor: 'red'
    },
    authMessageBlockText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    authLoadingBlock: {
        marginTop: 20,
        padding: 20
    },
    authLoadingBlockText: {
        color: '#ddd',
        fontWeight: 'bold'
    }
})