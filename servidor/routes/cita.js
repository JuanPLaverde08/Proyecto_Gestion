const express = require ('express');
const router = express.Router();
const citaController = require('../controllers/citaController');


// api/citas
router.post('/', citaController.crearCita);
router.get('/', citaController.obtenerCitas);
router.get('/:cedula', citaController.obtenerCitaEmpleado);
router.put('/:id', citaController.actualizarCita);
router.get('/:id', citaController.obtenerCita);
router.delete('/:id', citaController.eliminarCita);

module.exports = router;