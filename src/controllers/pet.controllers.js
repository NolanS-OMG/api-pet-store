const { Op } = require("sequelize");

const Pet = require("../models/pet.models.js");

// Encuentra todos las mascotas
const listPets = async (req, res) => {
  let { limit } = req.query;

  if (!limit || limit > 100) {
    limit = 100;
  };
  
  return res.json([...await Pet.findAll({ where: { id: { [Op.lte]: limit } } })]);
};

// Ingresa una nueva mascota a la base de datos
const createPets = async (req, res) => {
  const {name, tag} = req.body;
  
  if (!name) {
    res.status(404).json({
      code: 404,
      error: "The name of the pet is not provided"
    });
  };

  const pet = await Pet.create({name: name, tag: tag});

  return res.json(pet);
};

// Encontrar una mascota por su id
const getPetById = async (req, res) => {
  const { petId } = req.params;

  const pet = await Pet.findByPk(petId);

  if (!pet) {
    res.status(404).json({
      code: 404,
      error: "Pet not found"
    });
  };

  return res.json(pet);
};

module.exports = {
  listPets,
  getPetById,
  createPets,
};