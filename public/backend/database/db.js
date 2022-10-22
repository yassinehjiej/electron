
const mongoose = require('mongoose');
const uri = "mongodb+srv://yhjiej:Yassine2020.@yassine.02uz7tn.mongodb.net/?retryWrites=true&w=majority";

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
