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

import Styles from './ChatPageStyles'

class ChatPage extends Component {

    getHeader(){
        return (
            <View style={Styles.header}>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transparent"
                    onPress={this.props.performNavigateToChatListScreen.bind(this)}
                    style={Styles.backButton}
                >
                    <Text>All chats</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={1}
                    underlayColor="transparent"
                    onPress={this.props.performLogout.bind(this)}
                    style={Styles.logoutButton}
                >
                    <Text style={Styles.logoutButtonText}>X</Text>
                </TouchableHighlight>
            </View>
        )
    }

    getMessageRow(msg, key){
        return (
            <View key={key} style={Styles.messageListRow}>
                <Text>{msg.from}</Text>
                <Text>{msg.message}</Text>
            </View>
        )
    }

    emptyMessageList() {
        return (<Text>Messages list is empty</Text>)
    }

    getMessagesList(){
        let {chatMessagesList} = this.props

        return Array.isArray(chatMessagesList) ?
            chatMessagesList.map((msg, key) => this.getMessageRow(msg, key))
            : this.emptyMessageList()
    }

    render() {
        let {chatInputText, performSetChatInputText, callSendMessage} = this.props

        return (
            <View style={Styles.wrapper}>
                { this.getHeader() }
                <View style={Styles.messagesBlock}>
                    <ScrollView>
                        { this.getMessagesList() }
                    </ScrollView>
                    <View>
                        <View style={Styles.messagesBlockSend}>
                            <TextInput
                                style={Styles.messagesBlockInput}
                                numberOfLines={4}
                                multiline={true}
                                value={chatInputText}
                                placeholder="Write answer"
                                onChangeText={(text) => performSetChatInputText(text)}
                            />
                            <View style={Styles.messagesBlockButtonWrapper}>
                                <Button onPress={callSendMessage.bind(this)} title="Send" color="#841584" />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        chatMessagesList: state.chat.chatMessagesList,
        chatInputText: state.chat.chatInputText
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        callSendMessage: () => dispatch(thunks.callSendMessage()),
        performSetChatInputText: (text) => dispatch(thunks.performSetChatInputText(text)),
        performNavigateToChatListScreen: () => dispatch(thunks.performNavigateToChatListScreen()),
        performLogout: () => dispatch(thunks.performLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage)