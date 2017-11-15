/*
 *  Provider for socket messaging
 */

import io from 'socket.io-client'
import {chatBaseUrl, responseTimeout} from '../common/utils'

let instance = null

export default class SocketManager {
     _socket = null
     _host = null


    constructor() {
        if (!instance) {
            instance = this

            if (!chatBaseUrl) {
                throw new Error('Hostname is not correct')
            }

            try {

                this._socket = io.connect(chatBaseUrl)
                this._host = chatBaseUrl

            } catch (e){
                console.log(e)
            }
        }

        return instance
    }

    _getSocket(){
        return this._socket
    }

    sendNewMessage(options = {chatId: '', token: '', message: '', callback: () => {}}){
        let socket = this._getSocket()

        socket.emit('newMessage', {
            chatId: options.chatId,
            token: options.token,
            message: options.message
        })

        socket.on('newMessage', (data) => options.callback(data))

    }

    getChatMessages(options = {chatId: '', token: '', callback: () => {}}){
        let socket = this._getSocket()

        socket.emit('getChatMessages', {
            chatId: options.chatId,
            token: options.token,
            // limit: 10,
            // skip: 0,
        })

        socket.on('getChatMessages', (response) => options.callback(response.data))

    }

    getActiveChats(options = {token: '', callback: () => {}}){
        let socket = this._getSocket()

        socket.emit('getActiveChats', {
            token: options.token,
        })

        socket.on('getActiveChats', (data) => options.callback(data))

    }

    getWaitingChats(options = {token: '', callback: () => {}}){
        let socket = this._getSocket()

        socket.emit('getWaitingChats', {
            token: options.token,
        })

        socket.on('getWaitingChats', (data) => options.callback(data))

    }

}