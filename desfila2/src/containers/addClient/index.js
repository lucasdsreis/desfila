import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Input } from '../common'

class addClient extends Component {



    render() {
        const { screenStyle, restaurantButtonStyle, textStyle } = styles

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
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            label="Sobrenome"
                            placeholder="Sobrenome"
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            label="Nº pessoas"
                            placeholder="Número de pessoas"
                        />
                    </CardSection>

                    <TouchableOpacity style={restaurantButtonStyle} onPress={() => Actions.restaurantMain()}>
                        <Text style={textStyle}>Adicionar</Text>
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
export default addClient