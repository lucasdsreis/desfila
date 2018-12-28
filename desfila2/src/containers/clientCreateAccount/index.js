import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Input } from '../common'
import {
    changeCellphoneCreatelogin, changeConfirmedPasswordCreateLogin, changeEmailCreateLogin, changeNameCreateLogin,
    changePasswordCreateLogin, changeSurnameCreateLogin, createClientAccount
} from './actions'
import { connect } from 'react-redux'

class ClientCreateAccount extends Component {



    render() {
        const { screenStyle, clientButtonStyle, textStyle } = styles
        const { email, name, surname, password, confirmedPassword, cellphone, changeCellphoneCreatelogin, 
            changeConfirmedPasswordCreateLogin, changeEmailCreateLogin, changeNameCreateLogin,
            changePasswordCreateLogin, changeSurnameCreateLogin, createClientAccount } = this.props

        return (
            <View style={screenStyle}>
                <Image
                    style={{ marginBottom: 30, height: 200, width: 200, alignSelf: 'center' }}
                    source={require('../../Images/logo.png')}
                />

                <CardSection>
                    <Input
                        label="Nome"
                        placeholder="Nome"
                        onChangeText={(e) => changeNameCreateLogin(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Sobrenome"
                        placeholder="Sobrenome"
                        onChangeText={(e) => changeSurnameCreateLogin(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Celular"
                        placeholder="xx xxxxx-xxxx"
                        onChangeText={(e) => changeCellphoneCreatelogin(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={(e) => changeEmailCreateLogin(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Senha"
                        placeholder="Senha"
                        onChangeText={(e) => changePasswordCreateLogin(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Confirmar"
                        placeholder="Senha"
                        onChangeText={(e) => changeConfirmedPasswordCreateLogin(e)}
                    />
                </CardSection>

                <TouchableOpacity style={clientButtonStyle} onPress={() => createClientAccount({name, surname, password, confirmedPassword, email, cellphone})}>
                    <Text style={textStyle}>Criar Conta</Text>
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

    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
}

ClientCreateAccount = connect(
    state => {
        return {
            name: state.clientCreateAccount.name,
            surname: state.clientCreateAccount.surname,
            email: state.clientCreateAccount.email,
            cellphone: state.clientCreateAccount.cellphone,
            password: state.clientCreateAccount.password,
            confirmedPassword: state.clientCreateAccount.confirmedPassword
        }
    },
    {
        changeCellphoneCreatelogin, changeConfirmedPasswordCreateLogin, changeEmailCreateLogin, changeNameCreateLogin,
        changePasswordCreateLogin, changeSurnameCreateLogin, createClientAccount
    }
)(ClientCreateAccount)

export default ClientCreateAccount