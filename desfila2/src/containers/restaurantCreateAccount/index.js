import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, Modal } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Input } from '../common'
import { connect } from 'react-redux'
import {
    changeName, changeAdress, changeCity, changeCnpj, changeConfirmedPassword, changeCountryState,
    changeLatitude, changeLontitude, changePassword, createRestaurantAccount, changeModalVisible
} from './actions'
class RestaurantCreateAccount extends Component {

    render() {
        const { screenStyle, restaurantButtonStyle, textStyle } = styles
        const { name, cnpj, countryState, city, adress, latitude, longitude, password, confirmedPassword, changeName,
            changeAdress, changeCity, changeCnpj, changeConfirmedPassword, changeCountryState,
            changeLatitude, changeLontitude, changePassword, createRestaurantAccount, modal, changeModalVisible } = this.props

        return (
            <View style={screenStyle}>

                <Image
                    style={{ marginBottom: 30, height: 100, width: 100, alignSelf: 'center' }}
                    source={require('../../Images/logo.png')}
                />

                <CardSection>
                    <Input
                        label="Nome"
                        placeholder="Nome"
                        onChangeText={(e) => changeName(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="CNPJ"
                        placeholder="XXXXXXXXYYYYZZ"
                        onChangeText={(e) => changeCnpj(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Estado"
                        placeholder="Rio de Janeiro"
                        onChangeText={(e) => changeCountryState(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Cidade"
                        placeholder="Rio de Janeiro"
                        onChangeText={(e) => changeCity(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Endereço"
                        placeholder="Rua do Passeio, 70"
                        onChangeText={(e) => changeAdress(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Latitude"
                        placeholder="-22.978939"
                        onChangeText={(e) => changeLatitude(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Longitude"
                        placeholder="-43.233083"
                        onChangeText={(e) => changeLontitude(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Senha"
                        placeholder="Senha"
                        onChangeText={(e) => changePassword(e)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Confirmar"
                        placeholder="Senha"
                        onChangeText={(e) => changeConfirmedPassword(e)}
                    />
                </CardSection>

                <TouchableOpacity style={restaurantButtonStyle} onPress={() => createRestaurantAccount({ name, latitude, longitude, password, confirmedPassword, adress, city, countryState, cnpj })}>
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

    restaurantButtonStyle: {
        alignSelf: 'center',
        backgroundColor: '#77C9D4',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: 'white',
        width: '70%',
        marginTop: 30
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

RestaurantCreateAccount = connect(
    state => {
        return {
            name: state.restaurantCreateAccount.name,
            cnpj: state.restaurantCreateAccount.cnpj,
            countryState: state.restaurantCreateAccount.countryState,
            city: state.restaurantCreateAccount.city,
            adress: state.restaurantCreateAccount.adress,
            latitude: state.restaurantCreateAccount.latitude,
            longitude: state.restaurantCreateAccount.longitude,
            password: state.restaurantCreateAccount.password,
            confirmedPassword: state.restaurantCreateAccount.confirmedPassword,
            modal: state.restaurantCreateAccount.modal
        }
    },
    {
        changeName, changeAdress, changeCity, changeCnpj, changeConfirmedPassword, changeCountryState,
        changeLatitude, changeLontitude, changePassword, createRestaurantAccount, changeModalVisible
    }
)(RestaurantCreateAccount)

export default RestaurantCreateAccount