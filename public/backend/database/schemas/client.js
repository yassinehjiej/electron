const mongoose = require('mongoose');

const clientSchema = mongoose.Schema({
    name: { type: String, required: true },
    cin: { type: String, required: true },
    organizationName: { type: String},
    phone: { type: String, required: true },
    address: { type: String},
    gender: { type: String, required:true },
    description: { type: String },
    blood: { type:String },
    city: { type: String },
    createdAt: { type: Date, default: Date.now , required: true},
    updatedAt: { type: Date, default: Date.now },
    birthday : { type: Date, required: true },
    lastVisit: { type: Date, required: true}
})

const Client = mongoose.model('Client', clientSchema);

module.exports = Client;