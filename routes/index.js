const express = require("express");
const router = express.Router();
const {
  list,
  listEstadisticas,
  listEstadisticasById,
  register,
  agregarEstadisticas,
  addFoto,
  // formidable,
  deleteDeportista,
} = require("../controllers/index");

router.get("/deportistas", list);
router.get("/estadisticas", listEstadisticas);
router.get("/estadisticas/:id", listEstadisticasById);
router.post("/deportistas/register", register);
router.post("/deportistas/add/estadisticas", agregarEstadisticas);
// router.post("/deportistas/add/formidable/:id", formidable);
router.post("/deportistas/add/foto", addFoto);
router.delete("/deportistas/delete/:id", deleteDeportista);

module.exports = router;
