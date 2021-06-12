const mongoose = require('mongoose')

mongoose.connect(
    " mongodb+srv://shivi:shivi123@cluster0-ri5rq.mongodb.net/test?retryWrites=true&w=majority",// ניתן לצנזר ב.env
    {
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
    id: { type: String },
    name: { type: String },
    price: { type: Number },
    department: { type: String },
    category: { type: String },
    image: { type: String },
    brand: { type: String },
    tags: { type: String },
    description: { type: String }
}

const itemModel = mongoose.model('items', itemScheme,)

const userScheme = {
    id: String,
    name: String,
    email: String,
    Address:String,
    creditCard: {
        type: String,
        select: false
    },
    password: {
        type: String,
        select: false
    },
    orderHistory: []

}

const userModel = mongoose.model('users', userScheme)

const getUsers = async () => {
    return userModel.find({}, 'id name')
}
const getAllUsers = async () => {
    return userModel.find({})
}
const getUser = async (id) => {
    return userModel.findById(id)
}

const getUserByEmail = async (email) => {
    return userModel.findOne({ email })
}

const updateUser = async (newUser) => {
    return userModel.findOneAndUpdate({ id: newUser.id }, newUser, { runValidators: true, new: true })
}
const updateUserOrder = async (newOrder) => {
    return userModel.findOneAndUpdate({ email: newOrder.email }, { $push: { orderHistory: {newOrder} } },
        //צריך לדחוף את ההזמנה החדשה לorderHistory
        // כרגע לא עובד
    )
}

const createUser = async (data) => {
    return userModel.create(data)
}

const delUser = async (id) => {
    return userModel.findOneAndDelete({ id })
}


const getItems = async (price, department) => {


    return itemModel.find({ price: { $lte: price }, department: department },
        'id name price department category image brand tags description')

}
const getItemss = async (price) => {

    return itemModel.find({ price: { $lte: price } },
        'id name price department category image brand tags description')

}

const getItem = async (id) => {
    return itemModel.find({ id })
}

const updateItem = async (newItem) => {
    return itemModel.findOneAndUpdate({ id: newItem.id }, newItem, { runValidators: true, new: true })
}

const createItem = async (data) => {
    return itemModel.create(data)
}

const delItem = async (id) => {
    return itemModel.findOneAndDelete({ id })
}
module.exports = {
    getAllUsers, getItems, getItem, createItem, updateItem, delItem, getItemss,
    getUsers, getUser, createUser, getUserByEmail, updateUser, updateUserOrder, delUser
}