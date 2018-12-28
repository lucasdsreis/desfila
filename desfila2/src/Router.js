import React from 'react'
import { Router, Scene, Actions } from 'react-native-router-flux';
import SelectMode from './containers/selectMode'
import ClientLogin from './containers/clientLogin'
import ClientCreateAccount from './containers/clientCreateAccount'
import RestaurantCreateAccount from './containers/restaurantCreateAccount'
import AppMap from './containers/map'
import RestaurantLogin from './containers/restaurantLogin'
import RestaurantLine from './containers/restaurantLine'
import ClientLine from './containers/clientLine'
import ClientSearch from './containers/clientSearch'
import ClientWait from './containers/clientWait'

import plusRestaurantImg from '../src/Images/add.png'
import AddClient from './containers/addClient'
import searchImg from '../src/Images/magnifying-glass.png'
import plusClientImg from './Images/add-green.png'


const RouterComponent = () => {

    function numberOfPeople() {
        return (
            <DialogInput isDialogVisible={true}
                title={"Quase lá!"}
                message={"Quantas pessoas na mesa?"}
                hintInput={"4"}
                submitText='Confirmar'
                canceltext='Cancelar'
                keyboardType='numeric'>
            </DialogInput>
        )

    }

    return (
        <Router>
            <Scene key='root' hideNavBar>
                <Scene key='main'>
                    <Scene key='selectMode' component={SelectMode} title='Selecione seu modo de uso' initial />
                </Scene>
                <Scene key='client'>
                    <Scene leftTitle='Voltar' onLeft={() => Actions.main()} key='cientLogin' component={ClientLogin} title='Login' initial />
                    <Scene key='clientCreateAccount' component={ClientCreateAccount} title='Criar Conta' />
                </Scene>
                <Scene key='clientMain'>
                    <Scene rightButtonImage={searchImg} onRight={() => Actions.clientSearch()} rightButtonTextStyle={{ color: '#77C9D4', fontSize: 40, alignSelf: 'center' }} key='map' component={AppMap} title='Restaurantes' initial />
                    <Scene key='clientLine' component={ClientLine} title='Fila do Restaurante' />
                    <Scene key='clientSearch' component={ClientSearch} title='Pesquisa' />
                </Scene>
                <Scene key='wait'>
                    <Scene key='clientWait' component={ClientWait} title='Aguarde' />
                </Scene>
                <Scene key='restaurant'>
                    <Scene leftTitle='Voltar' onLeft={() => Actions.main()} key='restaurantLogin' component={RestaurantLogin} title='Login' initial />
                    <Scene key='restaurantCreateAccount' component={RestaurantCreateAccount} title='Criar Conta' />
                </Scene>
                <Scene key='restaurantMain' >
                    <Scene rightButtonImage={plusRestaurantImg} onRight={() => Actions.addClient()} rightButtonTextStyle={{ color: '#77C9D4', fontSize: 40, alignSelf: 'center' }} key='restaurantLine' component={RestaurantLine} title='Fila' />
                    <Scene key='addClient' title='Adicionar' component={AddClient} />
                </Scene>
            </Scene>
        </Router>
    )
}



export default RouterComponent