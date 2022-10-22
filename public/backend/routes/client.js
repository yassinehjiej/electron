const express = require("express");
const ClientController = require("../controller/clientController");

const router = express.Router();

//Client Apis routes
router.get('/api/client', ClientController.getAllClients);
router.get('/api/client/:cin', ClientController.getClientBy);
router.post('/api/client', ClientController.registerClient);
router.put('/api/client', ClientController.updateClient);
router.delete('/api/client/:cin', ClientController.deleteClientByCin);

module.exports = router;