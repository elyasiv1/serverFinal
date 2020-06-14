const mongoose = require('mongoose')

mongoose.connect(
    process.env.MongoConnectionString, {
    auto_reconnect: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
},
    (err) => {
        if (err)
        throw 'mongo connection problem'
        else console.log('mongo connected')
    })

const itemScheme = {
    id: String,
    name: String,
    price: Number,
    department: String,
    category: String,
    image: String,
    brand: String,
    tags: String,
    description: String,
}

const itemModel = mongoose.model('items', itemScheme)

const getItems = async () => {
    return itemModel.find({}, 'id name price department category image brand tags description')
}

const getItem = async (id) => {
    return itemModel.find({id})
}

const updateItem = async (newItem) => {
    return itemModel.findOneAndUpdate({ id: newItem.id }, newItem, { runValidators: true, new: true })
}

const createItem = async (data) => {
    return itemModel.create(data)
}
const delItem = async (id) => {
    return itemModel.findOneAndDelete({id})
}

module.exports = { getItems, getItem, createItem, updateItem, delItem }