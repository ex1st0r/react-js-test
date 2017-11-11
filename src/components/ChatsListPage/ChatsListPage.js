import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as thunks from '../../actions/thunks'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    ScrollView
} from 'react-native'

import Styles from './ChatsListPageStyles'

class ChatsListPage extends Component {

    getHeader(){
        let {performSetChatInputText, performLogout} = this.props

        return (
            <View style={Styles.header}>
                {/* Search REST doesn't exist */}
                <TextInput
                    style={Styles.headerSearchInput}
                    value={''}
                    numberOfLines={1}
                    multiline={false}
                    placeholder="Search for id"
                />
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transparent"
                    onPress={performLogout.bind(this)}
                    style={Styles.logoutButton}
                >
                    <Text style={Styles.logoutButtonText}>X</Text>
                </TouchableHighlight>
            </View>
        )
    }

    getChatsListRow(item, key){
        let {performSelectChat} = this.props

        return (
            <TouchableHighlight
                key={key}
                activeOpacity={1}
                underlayColor="transparent"
                onPress={() => performSelectChat(item._id)}
                style={Styles.chatListRow}
            >
                <Text>Chat id: {item._id}</Text>
            </TouchableHighlight>
        )
    }

    getChatsList(){
        let { activeChatsList, waitingChatsList } = this.props

        // Merge active & waiting lists
        let chatsList = [].concat(activeChatsList, waitingChatsList)

        return Array.isArray(chatsList) && chatsList.map((item, key) => this.getChatsListRow(item, key))
    }

    render() {
        return (
            <View style={Styles.wrapper}>
                { this.getHeader() }
                <View style={Styles.pageName}>
                    <Text style={Styles.pageNameText}>Chats</Text>
                </View>
                <ScrollView>
                    { this.getChatsList()}
                </ScrollView>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        activeChatsList: state.chat.activeChatsList,
        waitingChatsList: state.chat.waitingChatsList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        performSelectChat: (chatId) => dispatch(thunks.performSelectChat(chatId)),
        performLogout: () => dispatch(thunks.performLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatsListPage)