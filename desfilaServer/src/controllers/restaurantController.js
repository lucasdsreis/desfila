import mongoose from 'mongoose';
import request from 'request';
import restaurantModel from '../models/restaurantModel'
import crypto from 'crypto'
import _ from 'lodash'
import { Types } from 'mongoose'

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // Must be 256 bytes (32 characters)
const IV_LENGTH = 16; // For AES, this is always 16


function encrypt(text) {
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv('aes-256-cbc', 'brunnalorenzoeoamordaminhavidaaa', 'fluminense123456');
    let encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return encrypted.toString('hex');
}

async function createRestaurantAccount(req, res) {

    const { name, latitude, longitude, password, confirmedPassword, adress, city, countryState, cnpj } = req.body

    if (password !== confirmedPassword) {
        return res.send('As senhas não correspondem. Por favor, digite-as novamente.')
    }

    let findRestaurant = await restaurantModel.find({ 'cnpj': cnpj })

    if (_.isEmpty(findRestaurant)) {
        let encryptedPassword = encrypt(password)
        let newRestaurant = new restaurantModel({
            name: name,
            latitude: latitude,
            longitude: longitude,
            cnpj: cnpj,
            password: encryptedPassword,
            adress: adress,
            state: countryState,
            city: city
        })
        newRestaurant.save(function (err, restaurant) {
            if (err) {
                console.log(err)
                return res.send('Não foi possível criar a conta, verifique se todos os campos estão preenchidos corretamente.')
            }
            return res.send('Conta criada com sucesso')
        })
    }
    else {
        return res.send('CNPJ já cadastrado')
    }
}


async function restaurantLogin(req, res) {
    const { cnpj, password } = req.body
    let restaurant = await restaurantModel.find({ 'cnpj': req.body.cnpj })
    if (_.isEmpty(restaurant)) {
        return res.send('Login ou senha incorretos')
    }
    if (encrypt(password) === restaurant[0].password) {
        return res.send(restaurant[0])
    }
    else {
        return res.send('Login ou senha incorretos')
    }
}

async function getRestaurants(req, res) {
    let restaurants = await restaurantModel.find({})

    res.send(restaurants)
}

async function selectRestaurant(req, res){
    const { id } = req.body
    let _id = new Types.ObjectId(id)
    let restaurant = await restaurantModel.findById({_id})
    res.send(restaurant)
}

async function searchRestaurant (req, res){
    const {restaurant } = req.body
    let restaurants = await restaurantModel.find({name : new RegExp(restaurant, "i")})
    res.send(restaurants)
}


export default { createRestaurantAccount, restaurantLogin, getRestaurants, selectRestaurant, searchRestaurant }