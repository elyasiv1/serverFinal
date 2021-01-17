const
    DL = require('../DL.mongo'),
    items = require('./items')(DL)
    users = require('./users')(DL)

module.exports = { items,users }