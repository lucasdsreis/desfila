import mongoose, { Schema } from 'mongoose'

const restaurantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    cnpj: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: true
    },
    longitude: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    clients: [{
        name: String,
        surname: String,
        numberOfPeople: String,
        token: String,
        inclusionDate: Date,
        id: Schema.Types.ObjectId
    }],
    adress: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
})


export default mongoose.model('restaurant', restaurantSchema)