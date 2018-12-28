import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Input } from '../common'
import { changeCnpjLogin, changePasswordLogin, restaurantLogin } from './actions'
import { connect } from 'react-redux'

class RestaurantLogin extends Component {

    render() {
        const { screenStyle, restaurantButtonStyle, textStyle, newAccountButtonStyle } = styles
        const { password, cnpj, changeCnpjLogin, changePasswordLogin, restaurantLogin, restaurant } = this.props
        console.log(restaurant)
        return (
            <View style={screenStyle}>
                <Image
                    style={{ marginBottom: 30, height: 200, width: 200, alignSelf: 'center' }}
                    source={require('../../Images/logo.png')}
                />

                <CardSection>
                    <Input
                        label="CNPJ"
                        placeholder="XXXXXXXXYYYYZZ"
                        onChangeText={(e) => changeCnpjLogin(e)}
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

                <TouchableOpacity style={restaurantButtonStyle} onPress={() => restaurantLogin({ cnpj, password })}>
                    <Text style={textStyle}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={newAccountButtonStyle} onPress={() => Actions.restaurantCreateAccount()}>
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

    restaurantButtonStyle: {
        alignSelf: 'center',
        backgroundColor: '#77C9D4',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: 'white',
        width: '70%',
        marginTop: 30
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

RestaurantLogin = connect(
    state => {
        return {
            cnpj: state.restaurantLogin.cnpj,
            password: state.restaurantLogin.password,
            restaurant: state.restaurantLogin.restaurant
        }
    },
    {
        changeCnpjLogin, changePasswordLogin, restaurantLogin
    }
)(RestaurantLogin)


export default RestaurantLogin