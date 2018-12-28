import express from 'express'
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routes from './src/routes/index'

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://lucasdsreis:reis1734@ds143953.mlab.com:43953/desfila');

const app = express()
const router = express.Router()
const port = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes);

app.listen(port, () => {
 const date = new Date()
 console.log(`${date} - Server is running on port: ${port}`)
})
