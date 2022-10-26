const Client = require('../database/schemas/client');

class ClientDao {
    async registerClient (body) {
        const {name, cin, organizationName, phone, address, city, birthday, gender, description, blood, lastVisit} = body;
        const checkClient = await Client.findOne({cin: cin});console.log(checkClient)
        if(checkClient) {throw 'client already exist'}
        const client = new Client({
            name,
            cin,
            organizationName,
            phone,
            address,
            gender,
            description,
            blood,
            city,
            birthday,
            lastVisit
            });
        
        const result = await client.save();

        return result;
    }

    async updateClient (body) {
        const {name, cin, organizationName, phone, address, city, birthday, gender, description, blood, lastVisit} = body;
        const result = await Client.findOneAndUpdate({cin: cin},{
            name,
            cin,
            organizationName,
            phone,
            address,
            gender,
            description,
            blood,
            city,
            birthday,
            lastVisit,
            updatedAt: Date.now()
            } 
            , { new: true })

        return result;
    }

    async getClientBy (property) {
        console.log(property)
        const result = await Client.findOne(property)
        
        return result;
    }

    async getAllClients () {
        const result = await Client.find()
        
        return result;
    }

    async deleteClientByCin (cin) {
        const result = await Client.findOneAndDelete({cin: cin})
        
        return result;
    }
}

module.exports = new ClientDao();