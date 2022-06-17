const router = require("express").Router();

const { listPets, getPetById, createPets } = require("../controllers/pet.controllers.js");

router.get("/", listPets);
router.get("/:petId", getPetById);
router.post("/", createPets);

module.exports = router;