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
    TouchableHighlight
} from 'react-native'

import Styles from './AuthPageStyles'

class AuthPage extends Component {

    authError(){
        return (
            <View style={Styles.authMessageBlock}>
                <Text style={Styles.authMessageBlockText}>Login failed</Text>
            </View>
        )
    }

    authLoading(){
        return (
            <View style={Styles.authLoadingBlock}>
                <Text style={Styles.authLoadingBlockText}>Loading...</Text>
            </View>
        )
    }

    render() {
        let {performAuth, performSetAuthEmail, performSetAuthPassword,
            authFormPassword, authFormEmail, authError, authRequest} = this.props

        return (
            <View style={Styles.wrapper}>
                <View style={Styles.pageNameWrapper}>
                    <Text style={Styles.pageNameText}>Agent Login</Text>
                </View>
                <View style={Styles.formWrapper}>
                    <TextInput style={Styles.formInput}
                               value={authFormEmail}
                               placeholder="Email"
                               onChangeText={(text) => performSetAuthEmail(text)}
                    />
                    <TextInput style={[Styles.formInput, Styles.formPasswordInput]}
                               value={authFormPassword}
                               placeholder="Password"
                               secureTextEntry={true}
                               onChangeText={(text) => performSetAuthPassword(text)}
                    />
                    <TouchableHighlight
                        style={Styles.formSubmitButton}
                        onPress={performAuth.bind(this)}
                        activeOpacity={1}
                        underlayColor="transparent">
                        <Text style={Styles.formSubmitButtonText}>Connect</Text>
                    </TouchableHighlight>
                    { authError ? this.authError() : null }
                    { authRequest ? this.authLoading() : null }
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authFormEmail: state.chat.authFormEmail,
        authFormPassword: state.chat.authFormPassword,
        authError: state.chat.authError,
        authRequest: state.chat.authRequest
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        performAuth: () => dispatch(thunks.performAuth()),
        performSetAuthEmail: (email) => dispatch(thunks.performSetAuthEmail(email)),
        performSetAuthPassword: (name) => dispatch(thunks.performSetAuthPassword(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage)