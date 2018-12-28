import React, { Component } from 'react'
import { Text, View } from 'react-native'

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    )
}


const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifiyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd'
    }
}
export { CardSection }