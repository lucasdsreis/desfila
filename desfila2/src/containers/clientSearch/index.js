import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Input } from '../common'
import { connect } from 'react-redux'
import Dialog from "react-native-dialog"
import enterImg from '../../Images/login.png'
import {
    searchRestaurant, changeSearch, openDialog, closeDialog, includeClientOnLine, changeNumberOfPeople
} from './actions'
class ClientSearch extends Component {

    render() {
        const { screenStyle, textStyle, clientButtonStyle, headerStyle, list, card, cardTextStyle } = styles
        const { searchRestaurant, search, changeSearch, restaurants, openDialog, closeDialog, dialogClientSearch, 
            restaurant, includeClientOnLine, changeNumberOfPeople, client, numberOfPeople } = this.props
            
        return (
            <View style={screenStyle}>
                <View style={headerStyle}>
                    <CardSection>
                        <Input
                            label="Restaurante:"
                            placeholder="Digite aqui sua pesquisa"
                            onChangeText={(e) => changeSearch(e)}
                        />
                    </CardSection>
                    <TouchableOpacity style={clientButtonStyle} onPress={() => searchRestaurant(search)} >
                        <Text style={textStyle}>Pesquisar</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 30 }}><FlatList
                    data={restaurants}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={card} onPress={() => openDialog(item)}>
                            <Text style={cardTextStyle}>Nome: {item.name}</Text>
                            <Text style={cardTextStyle}>Estado: {item.state}</Text>
                            <Text style={cardTextStyle}>Cidade: {item.city}</Text>
                            <Text style={cardTextStyle}>Endereço: {item.adress}</Text>
                            <Text style={cardTextStyle}>Tamanho da Fila: {item.clients.length} mesas</Text>
                        </TouchableOpacity>}
                />
                </View>
                <Dialog.Container visible={dialogClientSearch}>
                    <Dialog.Title>Quantas pessoas?</Dialog.Title>
                    <Dialog.Input onChangeText={(number) => changeNumberOfPeople(number)}></Dialog.Input>
                    <Dialog.Button label='Cancelar' onPress={()=> closeDialog()}/>
                    <Dialog.Button label="Confirmar" onPress={() => includeClientOnLine({client, restaurant, numberOfPeople})}/>
                </Dialog.Container>
            </View>
        )
    }
}

const styles = {

    screenStyle: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#EAE3EA',
        display: 'flex',
        flexDirection: 'column'
    },

    card: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#57BC90',
        borderRadius: 25,
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        opacity: 1,
        borderColor: 'white',
        marginBottom: 20
    },

    cardTextStyle: {
        alignSelf: 'flex-start',
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        margin: 8
    },

    headerStyle: {
        display: 'flex',
        flexDirection: 'column',
    },

    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },

    clientButtonStyle: {
        alignSelf: 'center',
        backgroundColor: '#57BC90',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: 'white',
        width: '50%',
        marginTop: 20
    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 50,
        alignSelf: 'center',
        marginTop: 3
    },

    buttonImage: {
        padding: 10,
        height: 40,
        width: 40,
        alignSelf: 'center',
        marginTop: 5
    },

    list: {
        display: 'flex',
        flexDirection: 'row',
        height: 50
    },
    name: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        borderWidth: 0.3,
        borderColor: '#57BC90'
    },
    button: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        borderWidth: 0.3,
        borderColor: '#57BC90',
    }
}

ClientSearch = connect(
    state => {
        return {
            search: state.clientSearch.search,
            restaurants: state.clientSearch.restaurants,
            dialogClientSearch: state.clientSearch.dialogClientSearch,
            restaurant: state.clientSearch.restaurant,
            client: state.clientLogin.client,
            numberOfPeople: state.clientSearch.numberOfPeople
        }
    },
    {
        searchRestaurant, changeSearch, openDialog, closeDialog, includeClientOnLine, changeNumberOfPeople
    }
)(ClientSearch)

export default ClientSearch