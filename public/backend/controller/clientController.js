const ClientDao = require('../dao/client');

class ClientController {
    async registerClient(req, res) {
        try {
            const id = await ClientDao.registerClient(req.body);
            res.status(201).json(id);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async updateClient(req, res) {
        try {
            await ClientDao.updateClient(req.body);
            res.status(201).json('success');
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getClientBy(req, res) {
        try {
            const Client = await ClientDao.getClientBy(req.params);
            res.status(200).json(Client);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getAllClients(req, res) {
        try {
            const Clients = await ClientDao.getAllClients();
            res.status(200).json(Clients);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async deleteClientByCin(req, res) {
        try {
            ClientDao.deleteClientByCin(req.params.cin);
            res.status(204).json('success');
        } catch (err) {
            res.status(500).json(err);
        }
    }
}

module.exports = new ClientController();