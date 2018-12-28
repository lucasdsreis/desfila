import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Input } from '../common'
import { connect } from 'react-redux'
import Dialog from "react-native-dialog"
import { openDialog, closeDialog, changeNumberOfPeople, includeClientOnLine } from './actions'
class ClientLine extends Component {

    render() {
        const { screenStyle, clientButtonStyle, textStyle } = styles
        const { restaurant, dialogInput, openDialog, closeDialog, numberOfPeople, changeNumberOfPeople, client, includeClientOnLine } = this.props
        return (
            <View style={screenStyle}>
                <View style={styles.list}>
                    <View style={styles.name}>
                        <Text style={styles.titleItem}>Nome</Text>
                    </View>
                    <View style={styles.numberOfPeople}>
                        <Text style={styles.titleItem}>Nº pessoas</Text>
                    </View>
                </View>
                <FlatList
                    data={restaurant.clients}
                    renderItem={({ item }) =>
                        <View style={styles.list}>
                            <View style={styles.name}>
                                <Text style={styles.item}>{item.name} {item.surname}</Text>
                            </View>
                            <View style={styles.numberOfPeople}>
                                <Text style={styles.item}>{item.numberOfPeople}</Text>
                            </View>
                        </View>}
                />
                <TouchableOpacity style={clientButtonStyle} onPress={() => openDialog()} >
                    <Text style={textStyle}>Entrar na fila</Text>
                </TouchableOpacity>
                <Dialog.Container visible={dialogInput}>
                    <Dialog.Title>Quantas pessoas?</Dialog.Title>
                    <Dialog.Input onChangeText={(number) => changeNumberOfPeople(number)}></Dialog.Input>
                    <Dialog.Button label='Cancelar' onPress={() => closeDialog()}/>
                    <Dialog.Button label="Confirmar" onPress={() => includeClientOnLine({client, restaurant, numberOfPeople})}/>
                </Dialog.Container>
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
    item: {
        padding: 10,
        fontSize: 18,
        height: 50,
        alignSelf: 'center',
        marginTop: 3
    },
    titleItem: {
        padding: 10,
        fontSize: 18,
        height: 50,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 3
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
    numberOfPeople: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '50%',
        borderWidth: 0.3,
        borderColor: '#57BC90'
    },
    clientButtonStyle: {
        alignSelf: 'center',
        backgroundColor: '#57BC90',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: 'white',
        width: '70%',
        marginTop: 20,
        marginBottom: 30
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

ClientLine = connect(
    state => {
        return {
            restaurant: state.appMap.choosenRestaurant,
            dialogInput: state.clientLine.dialogInput,
            numberOfPeople: state.clientLine.numberOfPeople,
            client: state.clientLogin.client
        }
    },
    {
        openDialog, closeDialog, changeNumberOfPeople, includeClientOnLine
    }
)(ClientLine)

export default ClientLine