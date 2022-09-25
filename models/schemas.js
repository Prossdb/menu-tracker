const mongoose = require ('mongoose')

let menuSchema = new mongoose.Schema({
    name: {type:String, require:True},
    icon: {type:String, require:True},
    menuUrl: {type:String, require:True},
    entryDate: {type:Date, default:Date.now}
})

let usersSchema = new mongoose.Schema({
    email: {type:String, require:True},
    password: {type:String, require:True},
    entryDate: {type:Date, default:Date.now}
})

let menu = mongoose.model('menu', menuSchema, 'menu')
let users = mongoose.model('users', menuSchema, 'users')
let mySchemas = {
'menu' : menu,
'users' : users
}

module.exports = mySchemas