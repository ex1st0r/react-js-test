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

    sendNewMessage(options = {chatId: '', token: '', message: ''}){
        let socket = this._getSocket()

        return new Promise((resolve, reject) => {
            socket.emit('newMessage', {
                chatId: options.chatId,
                token: options.token,
                message: options.message
            })

            socket.on('newMessage', (data) => {
                resolve(data)
            })

            // If response didn't send we reject promise after responseTimeout
            setTimeout(() => reject(), responseTimeout)
        })

    }

    getChatMessages(options = {chatId: '', token: ''}){
        let socket = this._getSocket()

        return new Promise((resolve, reject) => {
            socket.emit('getChatMessages', {
                chatId: options.chatId,
                token: options.token,
                limit: 10,
                skip: 0,
            })

            socket.on('getChatMessages', (response) => resolve(response.data))

            // If response didn't send we reject promise after responseTimeout
            setTimeout(() => reject(), responseTimeout)
        })

    }

    getActiveChats(options = {token: ''}){
        let socket = this._getSocket()

        return new Promise((resolve, reject) => {
            socket.emit('getActiveChats', {
                token: options.token,
            })

            socket.on('getActiveChats', (data) => resolve(data))

            // If response didn't send we reject promise after responseTimeout
            setTimeout(() => reject(), responseTimeout)
        })
    }

    getWaitingChats(options = {token: ''}){
        let socket = this._getSocket()

        return new Promise((resolve, reject) => {
            socket.emit('getWaitingChats', {
                token: options.token,
            })

            socket.on('getWaitingChats', (data) => resolve(data))

            // If response didn't send we reject promise after responseTimeout
            setTimeout(() => reject(), responseTimeout)
        })
    }

}