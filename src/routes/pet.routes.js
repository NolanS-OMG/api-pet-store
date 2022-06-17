const router = require("express").Router();

const { listPets, getPetById, createPets } = require("../controllers/pet.controllers.js");

/**
 * @swagger
 * components:
 *  schemas:
 *    Pet:
 *      type: object
 *      properties:
 *        name:
 *          type: string
 *          description: pet name
 *        tag:
 *          type: string
 *          description: pet type
 *      required:
 *        - name
 *      example:
 *        name: Scott
 *        tag: dog
 */

/**
 * @swagger
 * /pets:
 *  get:
 *    summary: shows all the pets
 *    parameters:
 *      - name: limit
 *        in: query
 *        description: How many items to return at one time (max 100)
 *        required: false
 *        schema:
 *          type: integer
 *    responses:
 *      '200':
 *        description: A paged array of pets
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *      default:
 *        description: unexpected error
 *  post:
 *    summary: Create a pet
 *    parameters:
 *      - name: name
 *        in: body
 *        description: The name of the pet
 *        required: true
 *        schema:
 *          ref: "#/components/schemas/Pet"
 *    responses:
 *      '200':
 *        description: The new pet registered
 *        content:
 *          application/json:
 *            schema:
 *              ref: "#/components/schemas/Pet"
 *      default:
 *        description: unexpected error
 */

/**
 * @swagger
 * /pets/{petId}:
 *  get:
 *    summary: Info for a specific pet
 *    parameters:
 *      - name: petId
 *        in: path
 *        required: true
 *        description: The id of the pet to retrieve
 *        schema:
 *          type: string
 *    responses:
 *      '200':
 *        description: Expected response to a valid request
 *        content:
 *          application/json:
 *            schema:
 *              $ref: "#/components/schemas/Pet"
 *      default:
 *        description: unexpected error
 */
router.get("/", listPets);
router.get("/:petId", getPetById);
router.post("/", createPets);

module.exports = router;