import mongoose, { Schema } from 'mongoose'

const clientSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cellphone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})


export default mongoose.model('client', clientSchema)