import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, TextInput, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Input } from '../common'
import checkImg from '../../Images/success.png'
import deleteImg from '../../Images/delete.png'
class RestaurantLine extends Component {

    render() {
        const { screenStyle } = styles
        const data =
            [
                {
                    name: 'Lucas Reis', numberOfPeople: 4, key: 1
                },
                {
                    name: 'Gabriel Polverelli', numberOfPeople: 3, key: 2
                },
                {
                    name: 'João Garcia', numberOfPeople: 2, key: 3
                },
                {
                    name: 'André Felipe', numberOfPeople: 1, key: 4
                },
                {
                    name: 'Lucas Reis', numberOfPeople: 4, key: 5
                },
                {
                    name: 'Gabriel Polverelli', numberOfPeople: 3, key: 6
                },
                {
                    name: 'João Garcia', numberOfPeople: 2, key: 7
                },
                {
                    name: 'André Felipe', numberOfPeople: 1, key: 8
                },
                {
                    name: 'Lucas Reis', numberOfPeople: 4, key: 9
                },
                {
                    name: 'Gabriel Polverelli', numberOfPeople: 3, key: 10
                },
                {
                    name: 'João Garcia', numberOfPeople: 2, key: 11
                },
                {
                    name: 'André Felipe', numberOfPeople: 1, key: 12
                }
            ]

        return (
            <View style={screenStyle}>
                <View style={styles.list}>
                    <View style={styles.name}>
                        <Text style={styles.titleItem}>Nome</Text>
                    </View>
                    <View style={styles.numberOfPeople}>
                        <Text style={styles.titleItem}>Nº pessoas</Text>
                    </View>
                    <View style={styles.actions}>
                        <Text style={styles.titleItem}>Ações</Text>
                    </View>
                </View>
                <FlatList
                    data={data}
                    renderItem={({ item }) =>
                        <View style={styles.list}>
                            <View style={styles.name}>
                                <Text style={styles.item}>{item.name}</Text>
                            </View>
                            <View style={styles.numberOfPeople}>
                                <Text style={styles.item}>{item.numberOfPeople}</Text>
                            </View>
                            <View style={styles.actions}>
                                <TouchableOpacity>
                                    <Image source={deleteImg} style={{ height: 40, width: 40, marginLeft: 10 }} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image source={checkImg} style={{ height: 40, width: 40, marginRight: 10 }} />
                                </TouchableOpacity>
                            </View>
                        </View>}
                />
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
        fontWeight: 'bold'
    },
    list: {
        display: 'flex',
        flexDirection: 'row', 
        height: 50
    },
    name: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '42%',
        borderWidth: 0.3,
        borderColor: '#77C9D4'
    },
    numberOfPeople: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '30%',
        borderWidth: 0.3,
        borderColor: '#77C9D4'
    },
    actions: {
        width: '28%',
        borderWidth: 0.3,
        borderColor: '#77C9D4',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 50,
        display: 'flex',
        flexDirection: 'row'
    }
}

export default RestaurantLine