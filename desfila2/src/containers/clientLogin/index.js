import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Input } from '../common'
import { changeEmailLogin, changePasswordLogin, changeClientLatitude, changeClientLongitude, clientLogin } from './actions'
import { connect } from 'react-redux'

class ClientLogin extends Component {
    componentDidMount() {
        const { changeClientLatitude, changeClientLongitude } = this.props
        navigator.geolocation.getCurrentPosition(
            (position) => {
                changeClientLatitude(position.coords.latitude)
                changeClientLongitude(position.coords.longitude)
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );

    }

    render() {
        const { screenStyle, clientButtonStyle, textStyle, newAccountButtonStyle } = styles
        const { email, password, changePasswordLogin, changeEmailLogin, latitude, longitude, clientLogin } = this.props
        
        return (
            <View style={screenStyle}>
                <Image
                    style={{ marginBottom: 30, height: 200, width: 200, alignSelf: 'center' }}
                    source={require('../../Images/logo.png')}
                />

                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={(e) => changeEmailLogin(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Senha"
                        placeholder="Senha"
                        onChangeText={(e) => changePasswordLogin(e)}
                    />
                </CardSection>

                <TouchableOpacity style={clientButtonStyle} onPress={() => clientLogin({email, password})} >
                    <Text style={textStyle}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={newAccountButtonStyle} onPress={() => Actions.clientCreateAccount()} >
                    <Text style={textStyle}>Criar conta</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {

    screenStyle: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#EAE3EA'
    },

    clientButtonStyle: {
        alignSelf: 'center',
        backgroundColor: '#57BC90',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: 'white',
        width: '70%',
        marginTop: 20
    },

    newAccountButtonStyle: {
        alignSelf: 'center',
        backgroundColor: '#A5A5AF',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: 'white',
        width: '70%',
        marginTop: 20
    },

    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

ClientLogin = connect(
    state => {
        return {
            password: state.clientLogin.clientPassword,
            email: state.clientLogin.clientEmail,
            latitude: state.clientLogin.latitude,
            longitude: state.clientLogin.longitude
        }
    },
    {
        changeEmailLogin, changePasswordLogin, changeClientLatitude, changeClientLongitude, clientLogin
    }
)(ClientLogin)

export default ClientLogin