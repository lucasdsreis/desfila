import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, Image, TouchableHighlight } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Card, CardSection, Input } from '../common'
import MapView, { Marker, Callout } from 'react-native-maps';
import { connect } from 'react-redux'
import { changeClientLatitude, changeClientLongitude } from '../clientLogin/actions'
import { getRestaurants, selectRestaurant } from './actions'
import _ from 'lodash'

class AppMap extends Component {

    componentDidMount() {
        this.props.getRestaurants()
    }

    render() {
        const { container, map, title } = styles
        const { client, changeClientLatitude, changeClientLongitude, latitude, longitude, selectRestaurant, restaurants } = this.props

        navigator.geolocation.watchPosition(
            (position) => {
                changeClientLatitude(position.coords.latitude)
                changeClientLongitude(position.coords.longitude)
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );


        return (
            <View style={container}>
                <MapView style={map}
                    initialRegion={{
                        latitude: parseFloat(latitude),
                        longitude: parseFloat(longitude),
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker image={require('../../Images/standing-up-man-.png')} coordinate={{ latitude: parseFloat(latitude), longitude: parseFloat(longitude) }} title='Você está aqui'>
                        <Callout tooltip onPress={(e) => { e.stopPropagation() }}>
                            <View style={title}>
                                <Text>Você está aqui</Text>
                            </View>
                        </Callout>
                    </Marker>
                    {_.isEmpty(restaurants) ? <Text></Text> :
                        restaurants.map((restaurant, idx) => {
                            return (
                                <Marker image={require('../../Images/food.png')} coordinate={{ latitude: parseFloat(restaurant.latitude), longitude: parseFloat(restaurant.longitude) }} title={restaurant.name} key={idx}>
                                    <Callout tooltip onPress={(e) => { e.stopPropagation(); selectRestaurant(restaurant._id) }}>
                                        <View style={styles.title}>
                                            <Text>{restaurant.name}</Text>
                                        </View>
                                    </Callout>
                                </Marker>
                            )
                        })
                    }
                </MapView>
            </View>
        )
    }
}

const styles = {
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    title: {
        alignSelf: 'center',
        backgroundColor: 'white',
        borderRadius: 22,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10
    }

}

AppMap = connect(
    state => {
        return {
            client: state.clientLogin.client,
            latitude: state.clientLogin.latitude,
            longitude: state.clientLogin.longitude,
            restaurants: state.appMap.restaurants
        }
    },
    {
        changeClientLatitude, changeClientLongitude, getRestaurants, selectRestaurant
    }
)(AppMap)

export default AppMap