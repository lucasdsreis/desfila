import mongoose from 'mongoose';
import request from 'request';
import clientModel from '../models/clientModel'
import crypto from 'crypto'
import _ from 'lodash'
import { Types } from 'mongoose'
import restaurantModel from '../models/restaurantModel';

const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY; // Must be 256 bytes (32 characters)
const IV_LENGTH = 16; // For AES, this is always 16


function encrypt(text) {
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv('aes-256-cbc', 'brunnalorenzoeoamordaminhavidaaa', 'fluminense123456');
    let encrypted = cipher.update(text);

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return encrypted.toString('hex');
}

async function createClientAccount(req, res) {
    const { name, surname, confirmedPassword, password, email, cellphone } = req.body

    if (name.length === 0 || surname.length === 0 || password.length === 0 || confirmedPassword.length === 0 || email.length === 0 || cellphone.length === 0) {
        return res.send('Preencha todos os campos')
    }

    if (password !== confirmedPassword) {
        return res.send('As senhas estão diferentes, preencha-as novamente')
    }

    let findClient = await clientModel.find({ 'email': email })

    if (_.isEmpty(findClient)) {
        let encryptedPassword = encrypt(password)
        let newClient = new clientModel({
            name: name,
            password: encryptedPassword,
            email: email,
            surname: surname,
            cellphone: cellphone,
        })
        newClient.save(function (err, client) {
            if (err) {
                console.log(err)
                return res.send('Não foi possível criar a conta, verifique se todos os campos estão preenchidos corretamente.')
            }
            return res.send(client)
        })
    }
    else {
        return res.send('Email já cadastrado')
    }
}


async function clientLogin(req, res) {
    const { email, password } = req.body
    let client = await clientModel.find({ 'email': email })
    if (_.isEmpty(client)) {
        return res.send('Login ou senha incorretos')
    }
    if (encrypt(password) === client[0].password) {
        return res.send(client[0])
    }
    else {
        return res.send('Login ou senha incorretos')
    }
}

async function includeClientOnLine (req, res){
    const { client, restaurant, numberOfPeople } = req.body.infos
    console.log(req.body.infos)
    let newClient = {
        name: client.name,
        surname: client.surname,
        numberOfPeople: numberOfPeople,
        token: 'lalala',
        inclusionDate: Date.now(),
        id: new Types.ObjectId(client._id)
    }
    restaurantModel.update({_id: restaurant._id}, {$push: {clients: newClient}})
    .then(response => {
        res.sendStatus(200)
    })
    .catch(err =>{
        console.log(err)
        res.sendStatus(500).send(err)
    })
}

export default { createClientAccount, clientLogin, includeClientOnLine }