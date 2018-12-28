import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
class SelectMode extends Component {

    render() {
        return (
            <View style={styles.screenStyle}>
            <Text style={styles.firstTextStyle}>Agora é só esperar!</Text>
                <Image
                    style={{ height: 250, width: 250 }}
                    source={require('../../Images/hourglass-2.png')}
                />
                <TouchableOpacity style={styles.exitButtonStyle} onPress={() => Actions.clientMain()}>
                    <Text style={styles.buttonTextStyle}>Sair da fila</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = {

    screenStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: '#EAE3EA'
    },

    exitButtonStyle: {
        backgroundColor: '#ff5252',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: 'white',
        width: '70%'
    },

    firstTextStyle: {
        marginTop: '30%',
        alignSelf: 'center',
        color: 'black',
        fontSize: 23,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }, 

    secondTextStyle: {
        alignSelf: 'center',
        color: 'black',
        fontSize: 23,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: '20%'
    }, 

    buttonTextStyle: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }


}
export default SelectMode