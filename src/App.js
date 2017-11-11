import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Enums from './common/enums'
import { AuthPage, ChatsListPage, ChatPage } from './components'

import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native'

import Styles from './AppStyles'

const getAppPage = (page) => {
    switch (page) {
        case Enums.AppPages.AUTH_PAGE:
            return <AuthPage/>

        case Enums.AppPages.CHAT_LIST_PAGE:
            return <ChatsListPage/>

        case Enums.AppPages.CHAT_PAGE:
            return <ChatPage/>

        default:
            return <AuthPage/>
    }
}

const App = (props) => {

    return (
        <View style={Styles.wrapper}>
            { getAppPage(props.chat.appPage)}
        </View>
    )
}

const mapStateToProps = (state) => ({
    chat: state.chat
})


export default connect(mapStateToProps, null)(App)