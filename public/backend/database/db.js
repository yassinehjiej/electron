
const mongoose = require('mongoose');
const uri = "mongodb+srv://cabinet:jZwBX1XTlmNjzYte@cluster0.o5d4ahb.mongodb.net/?retryWrites=true&w=majority";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

module.exports = function() {
    mongoose.connect
        (uri, connectionParams)
        .then(()=> console.info('Connected to DB'))
        .catch((e)=> console.log("Error:", e));
}
