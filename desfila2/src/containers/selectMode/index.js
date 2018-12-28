import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
class SelectMode extends Component {
    
    render() {
        return (
            <View style={styles.screenStyle}>
                <Image
                    style={{ marginBottom: 30, height: 200, width: 200 }}
                    source={require('../../Images/logo.png')}
                />
                <TouchableOpacity style={styles.clientButtonStyle} onPress={() => Actions.client()}>
                    <Text style={styles.textStyle}>Cliente</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.restaurantButtonStyle} onPress={() => Actions.restaurant()}>
                    <Text style={styles.textStyle}>Estabelecimento</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {

    screenStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#EAE3EA'
    },

    clientButtonStyle: {
        backgroundColor: '#57BC90',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: 'white',
        width: '70%'

    },

    restaurantButtonStyle: {
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
export default SelectMode